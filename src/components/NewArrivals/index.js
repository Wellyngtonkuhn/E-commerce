import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { HighlightsSection, Content } from "./style";
import { Container } from "../../styles/GlobalStyles";


export default function NewArrivals({ title, span, data }) {

  const [newArrival, setNewArrival] = useState([]);

  const handleNewArrivals = (data) => {
    const newData = data ? [...data] : []
    const newProducts = newData?.reverse().slice(0, 4)
    return setNewArrival(newProducts)
  };

  useEffect(() => {
    handleNewArrivals(data);
  }, [data])
 
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
              {newArrival &&
                newArrival.map((item) => (
                  <li key={item._id}>
                    <Link to={`/shop/${item.nome}/${item._id}`}><img src={item.url} alt="newArrival" loading="lazy" /></Link>
                    <h3><Link to={`/shop/${item.nome}/${item._id}`}>{item.nome}</Link></h3>
                    <p>
                      {item.preco.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                    <div className="buttons">
                      <Link
                        className="btn-buy"
                        to={`/shop/${item.nome}/${item._id}`}>
                        Comprar
                      </Link>
                    </div>
                  </li>
                ))}

              {newArrival.length === 0 && (
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
