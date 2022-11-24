import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Content, Input, Select, MyAccountSection } from "./style";

const schema = yup.object({
  name: yup.string().required('campo obrigatório'),
  email: yup.string().email('email inválido').required('campo obrigatório'),
  phoneNumber: yup.string().required('campo obrigatório'),
  cpf: yup.string().required('campo obrigatório'),
  sexo: yup.string().required('campo obrigatório'),
})

export default function MyAccount() {
  const [optionsSelect, setOptionsSelect] = useState([
    "não informado",
    "masculino",
    "feminino",
  ]);

  const { register, handleSubmit, formState:{errors, isValid} } = useForm({
    mode:'onBlur',
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <MyAccountSection>
      <h3>Dados pessoais</h3>
      <Content>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Nome Completo
            <Input
              type="text"
              {...register("name")}
              placeholder="digite seu nome completo"
            />
             <p className="errorMessageform">{errors.name?.message}</p>
          </label>
          <label>
            E-mail
            <Input
              type="text"
              {...register("email")}
              placeholder="seu melhor email"
            />
              <p className="errorMessageform">{errors.email?.message}</p>
          </label>
          <label>
            Celular
            <Input
              type="text"
              {...register("phoneNumber")}
              placeholder="(00) 9 0000-0000"
            />
              <p className="errorMessageform">{errors.phoneNumber?.message}</p>
          </label>
          <label>
            Cpf
            <Input
              type="text"
              {...register("cpf")}
              placeholder="000.000.000-00"
            />
              <p className="errorMessageform">{errors.cpf?.message}</p>
          </label>
          <label>
            Sexo
            <Select {...register("sexo")}>
              {optionsSelect.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </Select>
            <p className="errorMessageform">{errors.sexo?.message}</p>
          </label>
          <button disabled={!isValid} type="submit">Salvar</button>
        </form>
      </Content>
    </MyAccountSection>
  );
}
