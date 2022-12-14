import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { api } from "../../axiosConfig/api";

import { HighlightsSection, Content } from "./style";
import { Container } from "../../styles/GlobalStyles";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function Highlights({ title, span, data, isLoading }) {
  const [bestSeller, setBestSeller] = useState([]);
  const { user, token } = useSelector((state) => state.user);
  const navigate = useNavigate()


  const handleBestSeller = async (data) => {
    const bestSeller = await data?.sort((a, b) => {
      return b.unidadesVendidas - a.unidadesVendidas;
    });

    return setBestSeller(bestSeller);
  };

  const handleFavorite = async (product) => {
    const favorite = {
      userId: user?.id,
      productId: product?._id,
      img: product?.url,
      name: product?.nome,
      price: product?.preco,
    };

    if (favorite.userId) {
      const { data } = await api.post(`favorites`, favorite, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if(data.message === "Ok"){
        return toast.success(`${favorite.name} adicionado aos favoritos`, {
          position: "top-right",
          autoClose: 3000
        });
      }
    } else {
      return navigate("/account", {
        state: { from: "/" },
      });
    }
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
                    <div className="buttons">
                      <Link
                        className="btn-buy"
                        to={`/shop/${item.nome}/${item._id}`}>
                        Comprar
                      </Link>

                      <button
                        className="btn-buy"
                        onClick={() => handleFavorite(item)}
                      >
                        <FontAwesomeIcon icon={faHeart} />
                      </button>
                    </div>
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
