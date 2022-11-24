import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { ChangePasswordSection, Content, Input } from "./style";

const schema = yup.object({
  primeiraSenha: yup
    .string()
    .min(8, "a senha deve conter no minimo 8 caracteres")
    .required("campo obrigatório"),
  segundaSenha: yup
    .string()
    .oneOf([yup.ref("primeiraSenha")], "a senha precisa ser igual")
    .required("campo obrigatório"),
});

export default function ChangePassword() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const handleChangePassword = (data) => {
    console.log(data);
    reset();
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
              type="text"
              placeholder="digite a nova senha"
              {...register("primeiraSenha")}
            />
            <p className="errorMessageform">{errors.primeiraSenha?.message}</p>
          </label>
          <label>
            Repita a senha
            <Input
              type="text"
              placeholder="confirme a nova senha"
              {...register("segundaSenha")}
            />
            <p className="errorMessageform">{errors.segundaSenha?.message}</p>
          </label>
          <button disabled={!isValid} type="submit">
            Salvar
          </button>
        </form>
      </Content>
    </ChangePasswordSection>
  );
}
