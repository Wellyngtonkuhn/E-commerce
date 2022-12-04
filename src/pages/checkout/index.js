import { CheckOutSection, Content } from "./style";
import { Container } from '../../styles/GlobalStyles'
import RenderOnTop from "../../components/RenderOnTop";

export default function CheckOut() {
  return (
    <CheckOutSection>
      <Container>
        <Content>
          CheckOut
        </Content>
      </Container>
      <RenderOnTop />
    </CheckOutSection>
  )
}
