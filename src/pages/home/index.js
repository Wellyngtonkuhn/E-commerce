import {
  MainHome,
  HeadSection,
  Container,
  HeadContent,
  EspecialOffersSection,
  EspecialOffersContent,
} from "./style";

import Head1 from "../../assets/head/head1.png";
import Head2 from "../../assets/head/head2.png";
import OfferImg1 from "../../assets/specialOffers/offer1.png";
import OfferImg2 from "../../assets/specialOffers/offer2.png";
import FreeShipping from "../../assets/specialOffers/free-shipping.png";
import ReturnImg from "../../assets/specialOffers/return.png";

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
                    <button>Learn More </button>
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
                  <button>Learn More </button>
                </div>
              </div>
            </EspecialOffersContent>
          </Container>
        </EspecialOffersSection>
      </MainHome>
    </>
  );
}
