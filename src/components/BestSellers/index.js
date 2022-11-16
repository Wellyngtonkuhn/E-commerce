import { BestSellersSection, Content, Ul } from "./style";
import { Container } from "../../styles/GlobalStyles";

import RayBanName from "../../assets/bestSellers/rayBan.png";
import { Link } from "react-router-dom";

export default function BestSellers() {
  return (
    <>
      <BestSellersSection>
        <Container>
          <Content>
            <h3 className="title">
              Best<span>sellers</span>
            </h3>
            <Ul>
              <li>
                <img src={RayBanName} alt="bestSeller" />
                <h3>Rayban Name</h3>
                <p>645,00 USD</p>
                <Link to="#"> Shop now</Link>
              </li>

              <li>
                <img src={RayBanName} alt="bestSeller" />
                <h3>Rayban Name</h3>
                <p>645,00 USD</p>
                <Link to="#"> Shop now</Link>
              </li>

              <li>
                <img src={RayBanName} alt="bestSeller" />
                <h3>Rayban Name</h3>
                <p>645,00 USD</p>
                <Link to="#"> Shop now</Link>
              </li>

              <li>
                <img src={RayBanName} alt="bestSeller" />
                <h3>Rayban Name</h3>
                <p>645,00 USD</p>
                <Link to="#"> Shop now</Link>
              </li>
            </Ul>
          </Content>
        </Container>
      </BestSellersSection>
    </>
  );
}
