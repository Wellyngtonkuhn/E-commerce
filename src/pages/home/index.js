import {
  MainHome,
  HeadSection,
  HeadContent,
  EspecialOffersSection,
  EspecialOffersContent,
  BrandsSection,
  BrandsContent,
  NewsLetterSection,
  NewsLetterContent,
} from "./style";
import { Container } from "../../styles/GlobalStyles";

import Highlights from "../../components/Highlights";

import { Head1, Head2 } from "../../assets/head/";
import {
  OfferImg1,
  OfferImg2,
  FreeShipping,
  ReturnImg,
} from "../../assets/specialOffers";

import { Carrera, Persol, Gucci, RayBan } from "../../assets/brands";

import { Banner1, Banner2 } from "../../assets/banner";
import SendImg from "../../assets/newsLetter/send.png";

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

        <Highlights title="Best" span="sellers" />
        <Highlights title="New" span="arrivals" />

        <BrandsSection>
          <Container>
            <BrandsContent>
              <h3 className="title">
                Bra<span>nds</span>
              </h3>
              <ul>
                <li>
                  <img src={RayBan} alt="rayban" />
                  <h3>345 Products</h3>
                </li>
                <li>
                  <img src={Carrera} alt="carrera" />
                  <h3>231 Products</h3>
                </li>
                <li>
                  <img src={Persol} alt="persol" />
                  <h3>172 Products</h3>
                </li>
                <li>
                  <img src={Gucci} alt="gucci" />
                  <h3>112 Products</h3>
                </li>
              </ul>
            </BrandsContent>
          </Container>
        </BrandsSection>

        <NewsLetterSection>
          <Container>
            <NewsLetterContent>
              <h3 className="title">
                News<span>Letter</span>
              </h3>

              <div>
                <ul className="cards">
                  <li className="card">
                    <img src={Banner1} alt="imagem" />
                    <div>
                      <p>Morbi faucibus elementum sodales</p>
                      <a href="#">Learn more</a>
                    </div>
                  </li>
                  <li className="card">
                    <img src={Banner2} alt="imagem" />
                    <div>
                      <p>Morbi faucibus elementum sodales</p>
                      <a href="#">Learn more</a>
                    </div>
                  </li>
                  <li className="card">
                    <img src={Banner1} alt="imagem" />
                    <div>
                      <p>Morbi faucibus elementum sodales</p>
                      <a href="#">Learn more</a>
                    </div>
                  </li>
                </ul>

                <div className="newsLetter">
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent eu risus nulla. In gravida vestibulum nulla, non
                      rutrum odio vestibulum ac.
                    </p>
                  </div>
                  <form>
                    <input type="text" placeholder="email@email.com" />

                    <a type="submit">
                      <img src={SendImg} alt="botao-enviar" />
                    </a>
                  </form>
                </div>
              </div>
            </NewsLetterContent>
          </Container>
        </NewsLetterSection>
        
      </MainHome>
    </>
  );
}
