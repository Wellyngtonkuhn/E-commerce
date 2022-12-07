import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import { AccountSection } from "./style";
import { Container } from "../../styles/GlobalStyles";

import Login from "../../components/login";
import ClientDashBoard from "../../components/ClientDashBoard";
import RenderOnTop from "../../components/RenderOnTop/";

const productionUrl = "https://ecommerce-back-end-api.onrender.com";
const devUrl = "http://localhost:3004";

export default function AccountPage() {
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState([]);

  const handleLogin = async ({ email, password }) => {
    const { data } = await axios.post(`${productionUrl}/login`, { email, password });
    if (data) {
      Cookies.set("token", data.token, { expires: 1 });
      localStorage.setItem("user", JSON.stringify(data?.user));
      setUserData(data.user);
      setToken(data.token);
    }
  };

  const handleRegister = async ({ userName, email, password }) => {
    const { data } = await axios.post(`${productionUrl}/register`, {
      userName,
      email,
      password,
    });
    if (data) {
      Cookies.set("token", data.token, { expires: 1 });
      localStorage.setItem("user", JSON.stringify(data?.user));
      setUserData(data.user);
      setToken(data.token);
    }
  };

  const handleLogOut = () => {
    Cookies.remove("token");
    localStorage.removeItem("user");
    setUserData([])
    setToken(null);
  };

  useEffect(() => {
    const isTokenCookie = Cookies.get("token");
    const isUser = localStorage.getItem("user");
    if (isTokenCookie) {
      // To do - Verificar se o token é valido
      setToken(isTokenCookie);
    }

    if (isUser) {
      setUserData(JSON.parse(isUser));
    }
  }, []);

  return (
    <AccountSection>
      <Container>
        {!token ? (
          <Login handleLogin={handleLogin} handleRegister={handleRegister} />
        ) : (
          <ClientDashBoard handleLogOut={handleLogOut} userData={userData} />
        )}
      </Container>
      <RenderOnTop />
    </AccountSection>
  );
}
