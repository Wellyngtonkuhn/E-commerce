import {
  MainHome,
  HeadSection,
  HeadContent,
  EspecialOffersSection,
  EspecialOffersContent,
} from "./style";
import { Container } from "../../styles/GlobalStyles";

import BestSellers from "../../components/BestSellers";

import { Head1, Head2 } from "../../assets/head/";
import {
  OfferImg1,
  OfferImg2,
  FreeShipping,
  ReturnImg,
} from "../../assets/specialOffers";

export default function Home() {
  return (
    <>
      <MainHome>
        <HeadSection>
          <Container>
            <HeadContent>
              <div>
                <h2>Women</h2>
                <img src={Head1} alt="Head 1" />
                <p>Dioptric | Sunglasses</p>
              </div>
              <div>
                <h2>Men</h2>
                <img src={Head2} alt="Head 1" />
                <p>Dioptric | Sunglasses</p>
              </div>
            </HeadContent>
          </Container>
        </HeadSection>

        <EspecialOffersSection>
          <Container>
            <EspecialOffersContent>
              <div className="firstColumn">
                <div className="offerImgContent">
                  <img src={OfferImg1} alt="imagem1" />
                  <div>
                    <h3>Fusce sit amet est quam dolor sit ametis</h3>
                    <a>Learn More </a>
                  </div>
                </div>

                <div className="infoDelivery">
                  <div>
                    <img src={FreeShipping} alt="free-shipping" />
                    <h3>Free shipping</h3>
                    <p>worldwide</p>
                  </div>
                  <div>
                    <img src={ReturnImg} alt="free-return" />
                    <h3>14 days free return</h3>
                    <p>worldwide</p>
                  </div>
                </div>
              </div>

              <div className="offerImgContent secondColumn">
                <img src={OfferImg2} alt="imagem2" />
                <div className="offerContent">
                  <h3>Fusce sit amet est quam dolor sit ametis</h3>
                  <a>Learn More </a>
                </div>
              </div>
            </EspecialOffersContent>
          </Container>
        </EspecialOffersSection>

        <BestSellers />
      </MainHome>
    </>
  );
}
