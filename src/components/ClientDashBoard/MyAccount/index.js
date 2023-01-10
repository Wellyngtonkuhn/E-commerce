import { useState } from "react";

import { useDispatch } from "react-redux";
import { removeToken } from "../../../redux/userSlice";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Content, Input, Select, MyAccountSection } from "./style";
import { api } from "../../../axiosConfig/api";

const schema = yup.object({
  name: yup.string().required('campo obrigatório'),
  email: yup.string().email('email inválido').required('campo obrigatório'),
  cellPhone: yup.string().required('campo obrigatório'),
  cpf: yup.string().required('campo obrigatório'),
  genre: yup.string().required('campo obrigatório'),
})

export default function MyAccount({ data, user, token }) {
  const [optionsSelect] = useState(["não informado", "masculino", "feminino"]);
  const dispatch = useDispatch()

  const { register, handleSubmit, formState:{errors, isValid} } = useForm({
    mode:'onBlur',
    resolver: yupResolver(schema)
  });

  
  const onSubmit = async (data) => {
      const request = await api.patch(`/user/${user?.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

     if(request.status === 200){
      return toast.success('Usuário atualizado', {
        position: "top-right",
        autoClose: 3000
      });
     }
  };

  const handleDelete = async (id) => {
    const deleteUserAccount = window.confirm('Deseja excluir sua conta')
    if(deleteUserAccount){
      const request = await api.delete(`user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if(request.status === 200){
        toast.success('Usuário deletado', {
          position: "top-right",
          autoClose: 3000
        });
        return dispatch(removeToken())
      }
    }
   }
   
  return (
    <MyAccountSection>
      <h3>Dados pessoais</h3>
      <Content>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Nome Completo
            <Input
              defaultValue={data?.name}
              type="text"
              {...register("name")}
              placeholder="digite seu nome completo"
            />
             <p className="errorMessageform">{errors.name?.message}</p>
          </label>
          <label>
            E-mail
            <Input
              defaultValue={data?.email}
              type="text"
              {...register("email")}
              placeholder="seu melhor email"
            />
              <p className="errorMessageform">{errors.email?.message}</p>
          </label>
          <label>
            Celular
            <Input
              defaultValue={data?.cellPhone}
              type="text"
              {...register("cellPhone")}
              placeholder="(00) 9 0000-0000"
            />
              <p className="errorMessageform">{errors.cellPhone?.message}</p>
          </label>
          <label>
            Cpf
            <Input
              className="inputCpf"
              defaultValue={data?.cpf}
              type="text"
              {...register("cpf")}
              placeholder="000.000.000-00"
            />
             <p className="errorMessageform">{errors.cpf?.message}</p>
          </label>
          <label>
            Sexo
            <Select {...register("genre")} defaultValue={data?.genre}>
              {optionsSelect.map((item, index) => (
                <option key={index}>
                  {item}
                </option>
              ))}
            </Select>
            <p className="errorMessageform">{errors.genre?.message}</p>
          </label>
          <button disabled={!isValid} type="submit">Salvar</button>
          <button onClick={()=> handleDelete(user?.id)}>Excuir conta</button>
        </form>
      </Content>
    </MyAccountSection>
  );
}
