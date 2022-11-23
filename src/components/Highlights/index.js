import { HighlightsSection, Content, Ul } from "./style";
import { Container } from "../../styles/GlobalStyles";

import RayBanName from "../../assets/bestSellers/rayBan.png";
import { Link } from "react-router-dom";

export default function Highlights({ title, span }) {
  return (
    <>
      <HighlightsSection>
        <Container>
          <Content>
            <h3 className="title">
              {title}
              <span>{span}</span>
            </h3>
            <ul>
              <li>
                <img src={RayBanName} alt="bestSeller" />
                <h3>Rayban Name</h3>
                <p>645,00 USD</p>
                <Link to="#"> Comprar</Link>
              </li>

              <li>
                <img src={RayBanName} alt="bestSeller" />
                <h3>Rayban Name</h3>
                <p>645,00 USD</p>
                <Link to="#"> Comprar</Link>
              </li>

              <li>
                <img src={RayBanName} alt="bestSeller" />
                <h3>Rayban Name</h3>
                <p>645,00 USD</p>
                <Link to="#"> Comprar</Link>
              </li>

              <li>
                <img src={RayBanName} alt="bestSeller" />
                <h3>Rayban Name</h3>
                <p>645,00 USD</p>
                <Link to="#"> Comprar</Link>
              </li>
            </ul>
          </Content>
        </Container>
      </HighlightsSection>
    </>
  );
}
