import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { api } from '../../../axiosConfig/api.js'

import { ChangePasswordSection, Content, Input } from "./style";

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

export default function ChangePassword({ user, token }) {
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
    const request = await api.patch(`/user/${user?.id}`, password, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    
    if(request.status === 200){
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
              type="password"
              placeholder="digite a nova senha"
              {...register("password")}
            />
            <p className="errorMessageform">{errors.password?.message}</p>
          </label>
          <label>
            Repita a senha
            <Input
              type="password"
              placeholder="confirme a nova senha"
              {...register("secondPassword")}
            />
            <p className="errorMessageform">{errors.secondPassword?.message}</p>
          </label>
          <button disabled={!isValid} type="submit">
            Salvar
          </button>
        </form>
      </Content>
    </ChangePasswordSection>
  );
}
