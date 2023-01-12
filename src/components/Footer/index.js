import { Content, DevSection, FooterSection } from "./style";
import { Container } from "../../styles/GlobalStyles";

import { Logo } from "../../assets/header/index";
import { TrustImg, PrisgarantImg, MercadoPago } from "../../assets/footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


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
      <DevSection>
          <h4>E-commerce desenvolvido por Wellyngton Kuhn</h4>
          <h5>Todos os direitos reservados © 2022-2023</h5>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/wellyngtonkuhn/" target='_blank'>
                <FontAwesomeIcon title="Linkedin" icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="https://github.com/Wellyngtonkuhn" target='_blank'>
                <FontAwesomeIcon title="GitHub" icon={faGithub} />
              </a>
            </li>
          </ul>
      </DevSection>
    </FooterSection>
  );
}
