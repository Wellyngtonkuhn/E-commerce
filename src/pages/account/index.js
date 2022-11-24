import { useState } from "react";

import { AccountSection } from "./style";
import { Container } from "../../styles/GlobalStyles";

import Login from "../../components/login";
import ClientDashBoard from "../../components/ClientDashBoard";

export default function AccountPage() {
  const [token, setToken] = useState(true);
  const [dataLogin, setDataLogin] = useState([]);

  const handleToken = () => {
    setToken(false);
  };

  return (
    <AccountSection>
      <Container>
        {!token ? (
          <Login setDataLogin={setDataLogin} setToken={setToken} />
        ) : (
          <ClientDashBoard handleToken={handleToken} data={dataLogin} />
        )}
      </Container>
    </AccountSection>
  );
}
