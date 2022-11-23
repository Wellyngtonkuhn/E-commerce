import { Link } from "react-router-dom";

import { Input, FormSection, LoginRegisterSection } from "./style";

export default function Login({
  title,
  showSignIn,
  showRegister,
  register,
  handleSubmit,
  onSubmit,
}) {
  return (
    <LoginRegisterSection>
      {showSignIn && (
        <FormSection>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3>{title}</h3>
            <Input type="text" placeholder="email" {...register("email")} />
            <Input
              type="text"
              placeholder="password"
              {...register("password")}
            />
            <div>
              <label>
                <input type="checkbox" />
                Lembrar
              </label>
              <Link to="#">Esqueceu a senha?</Link>
            </div>
            <button type="submit">Entrar</button>
          </form>
        </FormSection>
      )}

      {showRegister && (
        <FormSection>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Criar Conta</h3>
            <Input type="text" placeholder="name" {...register("name")} />
            <Input type="text" placeholder="email" {...register("email")} />
            <Input
              type="text"
              placeholder="password"
              {...register("password")}
            />
            <button type="submit">Criar conta</button>
          </form>
        </FormSection>
      )}
    </LoginRegisterSection>
  );
}
