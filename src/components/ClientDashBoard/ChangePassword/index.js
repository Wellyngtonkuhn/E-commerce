import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useSelector } from "react-redux";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { api } from '../../../axiosConfig/api.js'

import { ChangePasswordSection, Content, Input } from "./style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import Loading from '../../../assets/loading.svg'


const schema = yup.object({
  password: yup
    .string()
    .min(8, "a senha deve conter no minimo 8 caracteres")
    .required("campo obrigatório"),
  secondPassword: yup
    .string()
    .oneOf([yup.ref("password")], "a senha precisa ser igual")
    .required("campo obrigatório"),
});

export default function ChangePassword() {
  const [showPassword, setShowPassword] = useState('password')
  const [isLoading, setIsloading] = useState(false)
  const { user, token } = useSelector((state) => state.user);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const handleChangePassword = async ( password ) => {
    setIsloading(true)
    const request = await api.patch(`/user/${user?.id}`, password, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    
    if(request.status === 200){
      setIsloading(false)
      toast.success('Senha atualizada', {
        position: "top-right",
        autoClose: 3000
      });
      return reset()
     }
  };

  return (
    <ChangePasswordSection>
      <h3>Mudar senha</h3>

      <Content>
        <form onSubmit={handleSubmit(handleChangePassword)}>
          <label>
            Nova senha
              <Input
                autoFocus
                type={showPassword}
                placeholder="digite a nova senha"
                {...register("password")}
              />
            <p className="errorMessageform">{errors.password?.message}</p>
          </label>
          <label>
            Repita a senha
            <div className="inputPassword">
              <Input
                type={showPassword}
                placeholder="confirme a nova senha"
                {...register("secondPassword")}
              />
              <FontAwesomeIcon 
                icon={showPassword === 'password' ? faEye : faEyeSlash}
                onClick={() => setShowPassword(showPassword === 'password' ? 'text' : 'password')}
              />
            </div>
            <p className="errorMessageform">{errors.secondPassword?.message}</p>
          </label>
          <button disabled={!isValid} type="submit">
            Salvar
          </button>
        </form>
        {isLoading && <img className="loading" src={Loading} alt='loading' />}
      </Content>
    </ChangePasswordSection>
  );
}
