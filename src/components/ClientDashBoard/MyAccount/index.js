import { useState } from "react";
import { useForm } from "react-hook-form";

import { Content, Input, Select, MyAccountSection } from "./style";

export default function MyAccount() {
  const [optionsSelect, setOptionsSelect] = useState([
    "não informado",
    "masculino",
    "feminino",
  ]);

  const { register, handleSubmit } = useForm();

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
            <Input type="text" {...register("name")} />
          </label>
          <label>
            E-mail
            <Input type="text" {...register("email")} />
          </label>
          <label>
            Celular
            <Input type="text" {...register("phoneNumber")} />
          </label>
          <label>
            Cpf
            <Input type="text" {...register("cpf")} />
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
          </label>

          <button type="submit">Salvar</button>
        </form>
      </Content>
    </MyAccountSection>
  );
}
