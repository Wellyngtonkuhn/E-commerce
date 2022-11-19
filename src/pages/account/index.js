import { AccountSection } from "./style";
import { Container } from "../../styles/GlobalStyles";
import Login from "../../components/login";

export default function Account() {
  return (
    <AccountSection>
      <Container>
        <Login title="Login" />
      </Container>
    </AccountSection>
  );
}
