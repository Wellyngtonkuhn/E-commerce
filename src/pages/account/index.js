import { useSelector } from "react-redux";

import { AccountSection } from "./style";
import { Container } from "../../styles/GlobalStyles";

import Login from "../../components/login";
import ClientDashBoard from "../../components/ClientDashBoard";
import RenderOnTop from "../../components/RenderOnTop/";

export default function AccountPage() {
  const { token } = useSelector(state => state.user)

  return (
    <AccountSection>
      <Container>
        {!token ? (
          <Login />
        ) : (
          <ClientDashBoard />
        )}
      </Container>
      <RenderOnTop />
    </AccountSection>
  );
}
