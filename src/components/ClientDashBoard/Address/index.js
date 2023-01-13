import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

import { useQueryClient } from "@tanstack/react-query";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AddressSection, Content } from "./style";
import { api } from '../../../axiosConfig/api.js'

import InputMask from 'react-input-mask';

const schema = yup.object({
  cep: yup.string().required("campo obrigatório"),
  addressee: yup.string().required("campo obrigatório"),
  addresseeCpf: yup.string().required("campo obrigatório"),
  street: yup.string().required("campo obrigatório"),
  number: yup.string().required("campo obrigatório"),
  complement: yup.string().required("campo obrigatório"),
  district: yup.string().required("campo obrigatório"),
  city: yup.string().required("campo obrigatório"),
  state: yup.string().required("campo obrigatório"),
});

export default function Address({ data, user, token }) {
  const queryClient = useQueryClient()

  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const handleAddressUpdate = async (data) => {
    const request = await api.patch(`/user/${user?.id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    if(request.status === 200){
      queryClient.invalidateQueries('userData')
      return toast.success('Endereço atualizado', {
        position: "top-right",
        autoClose: 3000
      });
     }
  };

  const handleSearchByCep = async (cpf) => {
    const request = await axios.get(`https://viacep.com.br/ws/${cpf}/json/`)
      setValue('street',request.data.logradouro)
      setValue('complement',request.data.complemento)
      setValue('district',request.data.bairro)
      setValue('city',request.data.localidade)
      setValue('state',request.data.uf)   
  }
 
  return (
    <AddressSection>
      <h3>Endereço</h3>

      <Content>
        <form onSubmit={handleSubmit(handleAddressUpdate)}>
          <label>
            CEP
            <InputMask
              type='text'
              className="inputCpf"
              mask='99999-999'
              defaultValue={data?.cep}
              {...register("cep")}
              onChange={(e)=>handleSearchByCep(e.target.value)}
            />
            <p className="errorMessageform">{errors.cep?.message}</p>
          </label>
          <label>
            Destinatário
            <input
              type="text"
              className="inputCpf"
              placeholder="nome de quem vai receber"
              defaultValue={data?.addressee}
              {...register("addressee")}
            />
            <p className="errorMessageform">{errors.addressee?.message}</p>
          </label>
          <label>
            Cpf do Destinatário
            <InputMask
              type="text"
              className="inputCpf"
              mask={'999.999.999-99'}
              placeholder="cpf de quem vai receber"
              defaultValue={data?.addresseeCpf}
              {...register("addresseeCpf")}
            />
            <p className="errorMessageform">{errors.addresseeCpf?.message}</p>
          </label>
          <label>
            Rua
            <input
              className="inputCpf"
              type="text"
              placeholder="rua exemplo"
              defaultValue={data?.street}
              {...register("street")}
            />
            <p className="errorMessageform">{errors.street?.message}</p>
          </label>
          <label>
            Número
            <input
              className="inputCpf"
              type="text"
              placeholder="000"
              defaultValue={data?.number}
              {...register("number")}
            />
            <p className="errorMessageform">{errors.number?.message}</p>
          </label>
          <label>
            Complemento
            <input 
              className="inputCpf"
              type="text"
              placeholder="ex: apto-000 | casa-000"
              defaultValue={data?.complement}
              {...register("complement")}
            />
            <p className="errorMessageform">{errors.complement?.message}</p>
          </label>
          <label>
            Bairro
            <input
              className="inputCpf"
              type="text"
              placeholder="centro"
              defaultValue={data?.district}
              {...register("district")}
            />
            <p className="errorMessageform">{errors.district?.message}</p>
          </label>
          <label>
            Cidade
            <input
              className="inputCpf"
              type="text"
              placeholder="cidade"
              defaultValue={data?.city}
              {...register("city")}
            />
            <p className="errorMessageform">{errors.city?.message}</p>
          </label>
          <label>
            Estado
            <input
              className="inputCpf"
              type="text"
              placeholder="estado"
              defaultValue={data?.state}
              {...register("state")}
            />
            <p className="errorMessageform">{errors.state?.message}</p>
          </label>

          <label>
            Referência
            <input
              className="inputCpf"
              type="text"
              placeholder="locais próximos"
              defaultValue={data?.reference}
              {...register("reference")}
            />
          </label>
          <button type="submit">Salvar</button>
        </form>
      </Content>
    </AddressSection>
  );
}
