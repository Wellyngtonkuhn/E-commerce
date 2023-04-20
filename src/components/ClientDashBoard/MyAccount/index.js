import { useState } from "react";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../../../redux/userSlice";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Content, Select, MyAccountSection } from "./style";
import Loading from '../../../assets/loading.svg'
import { api } from "../../../axiosConfig/api";

import InputMask from 'react-input-mask';

const schema = yup.object({
  name: yup.string().required('campo obrigatório'),
  email: yup.string().email('email inválido').required('campo obrigatório'),
  cellPhone: yup.string().required('campo obrigatório'),
  cpf: yup.string().required('campo obrigatório'),
  genre: yup.string().required('campo obrigatório'),
})

export default function MyAccount() {

  const [optionsSelect] = useState(["não informado", "masculino", "feminino"]);
  const [isLoading, setIsloading] = useState(false)
  const queryClient = useQueryClient()
  const dispatch = useDispatch()
  const { user, token } = useSelector((state) => state.user);

  const { data } = useQuery(['userData', user?.id], async () => {
    if(user?.id){
      const request = await api.get(`/user/${user?.id}` ,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      return request.data
    }
    return null
  },{
    staleTime: (1000 * 60) * 60, // 1 hora 
    refetchOnWindowFocus: false
  })


  const { register, handleSubmit, formState:{errors} } = useForm({
    mode:'onBlur',
    resolver: yupResolver(schema)
  });

  // const handleSaveUser = async (data) => {
  //   setIsloading(true)
  //     const request = await api.patch(`/user/${user?.id}`, data, {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //    })

  //    if(request.status === 200){
  //     setIsloading(false)
  //     queryClient.invalidateQueries('userData')
  //     return toast.success('Usuário atualizado', {
  //       position: "top-right",
  //       autoClose: 3000
  //     });
  //    }
  // };

  const handleSaveUser = useMutation({
    mutationFn: async (data) => {
      const response = await api.patch(`/user/${user?.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      return response
    },
    onSuccess: (data) => {
        console.log(data) // to do
    },
    onError: () => {

    }
  })

  const handleDelete = useMutation({
      mutationFn: async (id) => {
        const deleteUserAccount = window.confirm(`${user?.name} deseja excluir sua conta?`)
        if(deleteUserAccount){
          const response = await api.delete(`user/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          return response
        }
      },
      onSuccess: () => {
        toast.success('Usuário deletado', {
          position: "top-right",
          autoClose: 3000
        });
          return dispatch(removeToken())
      },
      onError: (error) => {
        console.log(error)
        toast.error(error?.response.data.message, {
          position: "top-right",
          autoClose: 3000
        });
      }
      
  })

   
  return (
    <MyAccountSection>
      <h3>Dados pessoais</h3>
      <Content>
        <form onSubmit={handleSubmit(handleSaveUser.mutate)}>
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
              mask='(99) 9 9999-9999'
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
              className="inputCpf"
              mask='999.999.999-99'
              defaultValue={data?.cpf}
              {...register("cpf")}
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
          <div>
            <button type="submit">Salvar</button>
            <button onClick={()=> handleDelete.mutate(user?.id)}>Excuir conta</button>
          </div>
        </form>
        {isLoading && <img className="loading" src={Loading} alt='loading' />}
      </Content>
    </MyAccountSection>
  );
}
