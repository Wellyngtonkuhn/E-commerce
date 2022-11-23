import { useState } from "react";
import { useForm } from "react-hook-form";
import { AccountSection } from "./style";
import { Container } from "../../styles/GlobalStyles";

import Login from "../../components/login";
import ClientDashBoard from "../../components/ClientDashBoard";

export default function AccountPage() {
  const [showSignIn, setShowSingIn] = useState(true);
  const [showRegister, setshowRegister] = useState(false);
  const [token, setToken] = useState(false);
  const [dataLogin, setDataLogin] = useState([]);

  const handleLogin = () => {
    setShowSingIn(true);
    setshowRegister(false);
  };

  const handleRegister = () => {
    setshowRegister(true);
    setShowSingIn(false);
  };

  const handleToken = () => {
    setToken(false);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setDataLogin(data);
    setToken(true);
  };

  return (
    <AccountSection>
      <Container>
        {!token ? (
          <>
            <div className="buttonDivLoginRegister">
              <button onClick={handleLogin}>Login</button>
              <button onClick={handleRegister}>Register</button>
            </div>
            <Login
              title="Login"
              showSignIn={showSignIn}
              showRegister={showRegister}
              register={register}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
            />
          </>
        ) : (
          <ClientDashBoard handleToken={handleToken} data={dataLogin} />
        )}
      </Container>
    </AccountSection>
  );
}
