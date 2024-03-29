import { useState } from "react";
import { useParams , useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { api } from '../../axiosConfig/api.js'
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import RenderOnTop from '../../components/RenderOnTop/'

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LoadingSvg from '../../assets/loading.svg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import {
  FirstColumn,
  SecondColumn,
  SingleProductSection,
  Content,
} from "./style";
import { Container } from "../../styles/GlobalStyles";

export default function SingleProduct() {
  const [quantidade, setQuantidade] = useState(1);
  const [loading, setLoading] = useState(false)
  const { user, token } = useSelector(state => state.user)
  const { _id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()

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

  const handleFavorite = (product) => {
    const favorite = {
      userId: user?.id,
      productId: product?._id,
      img: product?.url,
      name: product?.nome,
      price: product?.preco,
    };

    if(favorite.userId){  
      setLoading(true)
        api.post('favorites', favorite, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          setLoading(false)
          return toast.success(`${favorite.name} adicionado aos favoritos`, {
            position: "top-right",
            autoClose: 3000
          })
        })
        .catch(({ response }) => {
          setLoading(false)
          return alert(response?.data?.message)
        })
    }else {
      return navigate("/account", {
      state: { from: `/shop/${product.nome}/${product._id}` },
    })
  }}

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
                  <button onClick={() =>handleFavorite(data)}>
                    <FontAwesomeIcon icon={faHeart} />
                  </button>

                </div>
              </>
            )}
          </SecondColumn>
      {loading && <img className="loadingSvg" src={LoadingSvg} alt='loading' />}
        </Content>
      </Container>
      <RenderOnTop />
    </SingleProductSection>
  );
}
