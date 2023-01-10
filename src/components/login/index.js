import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { api } from "../../axiosConfig/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

import { Input, FormSection, LoginRegisterSection } from "./style";
import { addToken } from "../../redux/userSlice";

const userLogin = yup.object({
  email: yup.string().email("email inválido").required("campo obrigatório"),
  password: yup
    .string()
    .min(8, "mínino de 8 caractéres")
    .required("campo obrigatório"),
});

const userRegister = yup.object({
  name: yup.string().required("campo obrigatório"),
  email: yup.string().email("email inválido").required("campo obrigatório"),
  password: yup
    .string()
    .min(8, "mínino de 8 caractéres")
    .required("campo obrigatório"),
});

export default function Login() {
  const [showSignIn, setShowSingIn] = useState(true);
  const [showRegister, setshowRegister] = useState(false);
  const [userLocation, setUserLocation] = useState("");

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setUserLocation(location?.state?.from);
  }, []);

  const handleLogin = async ({ email, password }) => {
    await api.post("/login", { email, password })
      .then((res) => {
        dispatch(addToken(res?.data));
          switch (userLocation) {
            case "/cart":
              return navigate("/cart");
            case "/shop":
              return navigate("/shop");
            case "/":
              return navigate("/");
            default:
              break;
          }
      })
      .catch((err) => alert(err?.response?.data?.message));
  };

  const handleRegister = async ({ name, email, password }) => {
    await api
      .post("/register", { name, email, password })
      .then((res) => {
        dispatch(addToken(res?.data));
        alert(res?.data?.message);
          switch (userLocation) {
            case "/cart":
              return navigate("/cart");
            case "/shop":
              return navigate("/shop");
            default:
              break;
          }    
      })
      .catch((err) => alert(err?.response?.data?.message));
  };  

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(userLogin, userRegister),
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
            <p>password: 123456789</p>
            <h3>Login</h3>
            <Input type="text" placeholder="email" {...register("email")} />
            <p className="errorMessageform">{errors.email?.message}</p>
            <Input
              type="password"
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
            <Input
              type="text"
              placeholder="nome completo"
              {...register("name")}
            />
            <p className="errorMessageform">{errors.name?.message}</p>

            <Input type="text" placeholder="email" {...register("email")} />
            <p className="errorMessageform">{errors.email?.message}</p>

            <Input
              type="password"
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
