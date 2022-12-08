import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { api } from '../../axiosConfig/api.js'
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import RenderOnTop from '../../components/RenderOnTop/'

import {
  FirstColumn,
  SecondColumn,
  SingleProductSection,
  Content,
} from "./style";
import { Container } from "../../styles/GlobalStyles";

export default function SingleProduct() {
  const [quantidade, setQuantidade] = useState(1);
  const { _id } = useParams();
  const dispatch = useDispatch();

  const { data, isLoading } = useQuery(["product"], async () => {
    const request = await api.get(`/products/${_id}`);
    return request.data;
  });
  
  const handleAddQTD = (qtd) => {
    if (quantidade < qtd) {
      setQuantidade(quantidade + 1);
    }
  };

  const handleLessQTD = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  const handleAddToCard = (data, quantidade) => {
    dispatch(addToCart([data, quantidade]));
  };

  return (
    <SingleProductSection>
      <Container>
        <Content>
          <FirstColumn>
            {isLoading ? (
              <div className="loading">
                <div></div>
              </div>
            ) : (
              <div>
                <img src={data?.url} alt={data?.nome} />
              </div>
            )}
          </FirstColumn>

          <SecondColumn>
            {isLoading ? (
              <>
                <div className="productDetails loading">
                  <h3>{data?.nome}</h3>
                  <h4>{data?.modelo}</h4>
                  <h5>{data?.marca}</h5>
                </div>
                <div>
                  <h4>Descrição</h4>
                  <p>{data?.descricao}</p>
                </div>

                <hr />

                <div>
                  <p className="lastUnits">
                    {data?.quantidade < 5 && "Últimas unidades"}
                  </p>
                  <h4>Preço</h4>
                  <h5 className="productPrice">{data?.preco}</h5>
                </div>

                <div className="pruductQTD">
                  <div>
                    <p>Tamanho</p>
                    <select>
                      <option defaultChecked>{data?.tamanho}</option>
                    </select>
                  </div>

                  <div>
                    <p>Quantidade</p>
                    <div>
                      <button onClick={handleLessQTD}>-</button>
                      <p>{quantidade}</p>
                      <button onClick={() => handleAddQTD(data?.quantidade)}>
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="productBuyButton">
                  <button>Adicionar ao carrinho</button>
                </div>
              </>
            ) : (
              <>
                <div className="productDetails">
                  <h3>{data?.nome}</h3>
                  <h4>{data?.modelo}</h4>
                  <h5>{data?.marca}</h5>
                </div>
                <div>
                  <h4>Descrição</h4>
                  <p>{data?.descricao}</p>
                </div>

                <hr />

                <div>
                  <p className="lastUnits">
                    {data?.quantidade < 5 && "Últimas unidades"}
                  </p>
                  <h4>Preço</h4>
                  <h5 className="productPrice">
                    {data?.preco.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </h5>
                </div>

                <div className="pruductQTD">
                  <div>
                    <p>Tamanho</p>
                    <select>
                      <option defaultChecked>{data?.tamanho}</option>
                    </select>
                  </div>

                  <div>
                    <p>Quantidade</p>
                    <div>
                      <button onClick={handleLessQTD}>-</button>
                      <p>{quantidade}</p>
                      <button onClick={() => handleAddQTD(data?.quantidade)}>
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="productBuyButton">
                  <button onClick={() => handleAddToCard(data, quantidade)}>
                    Adicionar ao carrinho
                  </button>
                </div>
              </>
            )}
          </SecondColumn>
        </Content>
      </Container>
      <RenderOnTop />
    </SingleProductSection>
  );
}
