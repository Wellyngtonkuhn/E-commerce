import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { AddressSection, Content, Input } from "./style";

const schema = yup.object({
  cep: yup.string().required('campo obrigatório'),
  destinatario: yup.string().required('campo obrigatório'),
  rua: yup.string().required('campo obrigatório'),
  numero: yup.string().required('campo obrigatório'),
  complemento: yup.string().required('campo obrigatório'),
  bairro: yup.string().required('campo obrigatório'),
  cidade: yup.string().required('campo obrigatório'),
  estado: yup.string().required('campo obrigatório'),
})

export default function Address() {
  const { register, handleSubmit, formState: {errors, isValid } } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });

  const handleAddressForm = (data) => {
    console.log(data);
  };

  return (
    <AddressSection>
      <h3>Endereço</h3>

      <Content>
        <form onSubmit={handleSubmit(handleAddressForm)}>
          <label>
            CEP
            <Input type="text" placeholder="00000-00" {...register("cep")} />
            <p className="errorMessageform">{errors.cep?.message}</p>
          </label>
          <label>
            Destinatário
            <Input
              type="text"
              placeholder="nome de quem vai receber"
              {...register("destinatario")}
            />
             <p className="errorMessageform">{errors.destinatario?.message}</p>
          </label>
          <label>
            Rua
            <Input type="text" placeholder="rua exemplo" {...register("rua")} />
            <p className="errorMessageform">{errors.rua?.message}</p>
          </label>
          <label>
            Número
            <Input type="text" placeholder="000" {...register("numero")} />
            <p className="errorMessageform">{errors.numero?.message}</p>
          </label>
          <label>
            Complemento
            <Input
              type="text"
              placeholder="ex: apto-000 | casa-000"
              {...register("complemento")}
            />
             <p className="errorMessageform">{errors.complemento?.message}</p>
          </label>
          <label>
            Bairro
            <Input type="text" placeholder="centro" {...register("bairro")} />
            <p className="errorMessageform">{errors.bairro?.message}</p>
          </label>
          <label>
            Cidade
            <Input type="text" placeholder="cidade" {...register("cidade")} />
            <p className="errorMessageform">{errors.cidade?.message}</p>
          </label>
          <label>
            Estado
            <Input type="text" placeholder="estado" {...register("estado")} />
            <p className="errorMessageform">{errors.estado?.message}</p>
          </label>

          <label>
            Referência
            <Input
              type="text"
              placeholder="locais próximos"
              {...register("referencia")}
            />
          </label>
          <button disabled={!isValid} type="submit">Salvar</button>
        </form>
      </Content>
    </AddressSection>
  );
}
