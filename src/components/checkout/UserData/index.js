import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputMask from 'react-input-mask';

import { Form } from "./style";

import { addUserInfo } from "../../../redux/checkout";

const schema = yup.object({
  name: yup.string().required('campo obrigatório'),
  email: yup.string().email('email inválido').required('campo obrigatório'),
  cellPhone: yup.string().required('campo obrigatório'),
  cpf: yup.string().required('campo obrigatório')
})

export default function UserData({ data, token }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const { register, handleSubmit, formState:{errors} } = useForm({
    mode:'onBlur',
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    if(!token) navigate("/account", {
      state: { from: "/cart/user-info" },
    }) 
  }, [token])

  const handleSaveUserData = (data) => {
      dispatch(addUserInfo(data))
      navigate('/cart/user-address')
    return
  }

  return (
    <Form onSubmit={handleSubmit(handleSaveUserData)}>
      <label>
        Nome Completo
        <input
          className="inputCpf"
          defaultValue={data?.name}
          type="text"
          {...register("name")}
          placeholder="digite seu nome completo"
        />
        <p className="errorMessageform">{errors.name?.message}</p>
      </label>
      <label>
        E-mail
        <input
          className="inputCpf"
          defaultValue={data?.email}
          type="text"
          {...register("email")}
          placeholder="seu melhor email"
        />
        <p className="errorMessageform">{errors.email?.message}</p>
      </label>
      <label>
        Celular
        <InputMask
          mask="(99) 9 9999-9999"
          className="inputCpf"
          defaultValue={data?.cellPhone}
          type="text"
          {...register("cellPhone")}
          placeholder="(00) 9 0000-0000"
        />
        <p className="errorMessageform">{errors.cellPhone?.message}</p>
      </label>
      <label>
        Cpf
        <InputMask
          type="text"
          placeholder="999.999.999-99"
          className="inputCpf"
          mask="999.999.999-99"
          defaultValue={data?.cpf}
          {...register("cpf")}
        />
        <p className="errorMessageform">{errors.cpf?.message}</p>
      </label>
      <div>
        <button type="submit">Salvar</button>
      </div>
    </Form>
  );
}
