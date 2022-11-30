import { useState } from "react";
import { Link } from "react-router-dom";

import { HighlightsSection, Content } from "./style";
import { Container } from "../../styles/GlobalStyles";

export default function Highlights({ title, span, data, isLoading }) {
  const [bestSeller, setBestSeller] = useState([]);

  const handleBestSeller = async (data) => {
    const bestSeller = await data?.sort((a, b) => {
      return b.unidadesVendidas - a.unidadesVendidas;
    });

    return setBestSeller(bestSeller);
  };

  handleBestSeller(data);

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
              {bestSeller &&
                bestSeller.slice(0, 4).map((item) => (
                  <li key={item.id}>
                    <img src={item.url} alt="bestSeller" />
                    <h3>{item.nome}</h3>
                    <p>
                      {item.preco.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                    <Link to={`/shop/${item.nome}/${item.id}`}> Comprar</Link>
                  </li>
                ))}

              {!bestSeller && (
                <div className="loadingContent">
                  <li className="loading">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </li>
                  <li className="loading">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </li>
                  <li className="loading">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </li>
                  <li className="loading">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </li>
                </div>
              )}
            </ul>
          </Content>
        </Container>
      </HighlightsSection>
    </>
  );
}
