import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AddressSection, Content, Input } from "./style";
import { api } from '../../../axiosConfig/api.js'

const schema = yup.object({
  cep: yup.string().required("campo obrigatório"),
  addressee: yup.string().required("campo obrigatório"),
  street: yup.string().required("campo obrigatório"),
  number: yup.string().required("campo obrigatório"),
  complement: yup.string().required("campo obrigatório"),
  district: yup.string().required("campo obrigatório"),
  city: yup.string().required("campo obrigatório"),
  state: yup.string().required("campo obrigatório"),
});

export default function Address({ data, user, token }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
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
      return toast.success('Endereço atualizado', {
        position: "top-right",
        autoClose: 3000
      });
     }
  };


  return (
    <AddressSection>
      <h3>Endereço</h3>

      <Content>
        <form onSubmit={handleSubmit(handleAddressUpdate)}>
          <label>
            CEP
            <Input
              type="text"
              placeholder="00000-00"
              defaultValue={data?.cep}
              {...register("cep")}
            />
            <p className="errorMessageform">{errors.cep?.message}</p>
          </label>
          <label>
            Destinatário
            <Input
              type="text"
              placeholder="nome de quem vai receber"
              defaultValue={data?.addressee}
              {...register("addressee")}
            />
            <p className="errorMessageform">{errors.addressee?.message}</p>
          </label>
          <label>
            Rua
            <Input
              type="text"
              placeholder="rua exemplo"
              defaultValue={data?.street}
              {...register("street")}
            />
            <p className="errorMessageform">{errors.street?.message}</p>
          </label>
          <label>
            Número
            <Input
              type="text"
              placeholder="000"
              defaultValue={data?.number}
              {...register("number")}
            />
            <p className="errorMessageform">{errors.number?.message}</p>
          </label>
          <label>
            Complemento
            <Input
              type="text"
              placeholder="ex: apto-000 | casa-000"
              defaultValue={data?.complement}
              {...register("complement")}
            />
            <p className="errorMessageform">{errors.complement?.message}</p>
          </label>
          <label>
            Bairro
            <Input
              type="text"
              placeholder="centro"
              defaultValue={data?.district}
              {...register("district")}
            />
            <p className="errorMessageform">{errors.district?.message}</p>
          </label>
          <label>
            Cidade
            <Input
              type="text"
              placeholder="cidade"
              defaultValue={data?.city}
              {...register("city")}
            />
            <p className="errorMessageform">{errors.city?.message}</p>
          </label>
          <label>
            Estado
            <Input
              type="text"
              placeholder="estado"
              defaultValue={data?.state}
              {...register("state")}
            />
            <p className="errorMessageform">{errors.state?.message}</p>
          </label>

          <label>
            Referência
            <Input
              type="text"
              placeholder="locais próximos"
              defaultValue={data?.reference}
              {...register("reference")}
            />
          </label>
          <button disabled={!isValid} type="submit">
            Salvar
          </button>
        </form>
      </Content>
    </AddressSection>
  );
}
