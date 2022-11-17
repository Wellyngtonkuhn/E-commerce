import { Content, FooterSection } from "./style";
import { Container } from "../../styles/GlobalStyles";

import { Logo } from "../../assets/header/index";
import { TrustImg, PrisgarantImg, MercadoPago } from "../../assets/footer";

export default function Footer() {
  return (
    <FooterSection>
      <Container>
        <Content>
          <div>
            <img src={Logo} alt="eyewear" />
          </div>
          <div>
            <img src={MercadoPago} alt="safetyAcquisition" />
            <img src={TrustImg} alt="trust" />
            <img src={PrisgarantImg} alt="prisgarant" />
          </div>
        </Content>
      </Container>
    </FooterSection>
  );
}
