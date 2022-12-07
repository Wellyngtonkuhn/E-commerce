import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import { AccountSection } from "./style";
import { Container } from "../../styles/GlobalStyles";

import Login from "../../components/login";
import ClientDashBoard from "../../components/ClientDashBoard";
import RenderOnTop from '../../components/RenderOnTop/'

const productionUrl = 'https://ecommerce-back-end-api.onrender.com'
const devUrl = 'http://localhost:3004'

export default function AccountPage() {
  const [token, setToken] = useState(false);
  const [userDataLogin, setUserDataLogin] = useState([]);

  const handleRemoveToken = () => {
    Cookies.remove('token')
    setToken(false);
  };

  const handleLogin = async ({email, password}) => {
    const { data } = await axios.post(`${devUrl}/login`, { email, password })
    if(data){
     Cookies.set('token', data.token, {expires: 1})
     setUserDataLogin(data)
     setToken(true)
    }
  };

  useEffect(() => {
    const isTokenCookie = Cookies.get('token')
    if(isTokenCookie){
      setToken(true)
    }
  },[])


  return (
    <AccountSection>
      <Container>
        {!token ? (
          <Login handleLogin={handleLogin} />
        ) : (
          <ClientDashBoard handleRemoveToken={handleRemoveToken} data={userDataLogin} />
        )}
      </Container>
      <RenderOnTop />
    </AccountSection>
  );
}
