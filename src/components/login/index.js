import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

import { Input, FormSection, LoginRegisterSection } from "./style";

const schemaLogin = yup.object({
  email: yup.string().email("email inválido").required("campo obrigatório"),
  password: yup.string().required("campo obrigatório"),
});

const schemaRegister = yup.object({
  userName: yup.string().required("campo obrigatório"),
  email: yup.string().email("email inválido").required("campo obrigatório"),
  password: yup.string().required("campo obrigatório"),
});

export default function Login({ handleLogin, handleRegister }) {
  const [showSignIn, setShowSingIn] = useState(true);
  const [showRegister, setshowRegister] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaLogin, schemaRegister),
  });


  const handleShowLogin = () => {
    setShowSingIn(true);
    setshowRegister(false);
  };

  const handleShowRegister = () => {
    setshowRegister(true);
    setShowSingIn(false);
  };

  return (
    <LoginRegisterSection>
      <div className="buttonDivLoginRegister">
        <button onClick={handleShowLogin}>Login</button>
        <button onClick={handleShowRegister}>Register</button>
      </div>

      {showSignIn && (
        <FormSection>
          <form onSubmit={handleSubmit(handleLogin)}>
            <p>Utilize os dados a seguir para acessar a aplicação</p>
            <p>email: admin@gmail.com</p>
            <p>password: 123456</p>
            <h3>Login</h3>
            <Input type="text" placeholder="email" {...register("email")} />
            <p className="errorMessageform">{errors.email?.message}</p>
            <Input
              type="text"
              placeholder="password"
              {...register("password")}
            />
            <p className="errorMessageform">{errors.password?.message}</p>
            <div>
              <label>
                <input type="checkbox" />
                Lembrar
              </label>
              <Link to="#">Esqueceu a senha?</Link>
            </div>
            <button disabled={!isValid} type="submit">
              Entrar
            </button>
          </form>
        </FormSection>
      )}

      {showRegister && (
        <FormSection>
          <form onSubmit={handleSubmit(handleRegister)}>
            <h3>Criar Conta</h3>
            <Input type="text" placeholder="name" {...register("userName")} />
            <p className="errorMessageform">{errors.userName?.message}</p>
            <Input type="text" placeholder="email" {...register("email")} />
            <p className="errorMessageform">{errors.email?.message}</p>
            <Input
              type="text"
              placeholder="password"
              {...register("password")}
            />
            <p className="errorMessageform">{errors.password?.message}</p>
            <button disabled={!isValid} type="submit">
              Criar conta
            </button>
          </form>
        </FormSection>
      )}
    </LoginRegisterSection>
  );
}
