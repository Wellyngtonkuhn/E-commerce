import { useState } from "react";
import { AccountSection } from "./style";
import { Container } from "../../styles/GlobalStyles";

import Login from "../../components/login";
import ClientDashBoard from "../../components/ClientDashBoard";

export default function AccountPage() {

  const [showSignIn, setShowSingIn] = useState(true);
  const [showRegister, setshowRegister] = useState(false);
  const [token] = useState(true);

  const handleLogin = () => {
    setShowSingIn(true);
    setshowRegister(false);
  };

  const handleRegister = () => {
    setshowRegister(true);
    setShowSingIn(false);
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
            />
          </>
        ) : (
          <ClientDashBoard name='Wellygton Kuhn' />
        )}
      </Container>
    </AccountSection>
  );
}
