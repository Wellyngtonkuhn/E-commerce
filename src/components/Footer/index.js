import { useDispatch, useSelector } from "react-redux";
import { Content, DevSection, FooterSection } from "./style";
import { Container } from "../../styles/GlobalStyles";

import { Logo } from "../../assets/header/index";
import { TrustImg, PrisgarantImg, MercadoPago } from "../../assets/footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { addUserClick } from "../../redux/userClick.js";

export default function Footer() {
  const showMenuMobile = useSelector(state => state.showMobile.show)
  const dispatch = useDispatch()

  return (
    <FooterSection onClick={e => showMenuMobile && dispatch(addUserClick(e.isTrusted))}>
      <Container>
        <Content>
          <div>
            <img src={Logo} alt="eyewear" loading="lazy" />
          </div>
          <div>
            <img src={MercadoPago} alt="safetyAcquisition" loading="lazy" />
            <img src={TrustImg} alt="trust" loading="lazy" />
            <img src={PrisgarantImg} alt="prisgarant" loading="lazy"/>
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
