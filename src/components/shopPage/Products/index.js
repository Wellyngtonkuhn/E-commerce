import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { api } from "../../../axiosConfig/api";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ProductsSection, Ul } from "./style";

import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LoadingSvg from '../../../assets/loading.svg'

export default function Products({ data, isLoading, handleFilter }) {
  const [loading, setLoading] = useState(false)
  const { user, token } = useSelector((state) => state.user);
  const navigate = useNavigate();

// Adiciona um novo favorito
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
      state: { from: "/shop" },
    })
  }}

  return (
    <ProductsSection>
      <Ul>
        {data &&
          handleFilter().map((item) => (
            <li key={item._id}>
               <Link to={`/shop/${item.nome}/${item._id}`}><img src={item.url} alt={item.nome} /></Link>
              <h3>
                <Link to={`/shop/${item.nome}/${item._id}`}>{item.nome}</Link>
              </h3>
              <p>
                {item.preco.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <div className="buttons">
                <Link className="btn-buy" to={`/shop/${item.nome}/${item._id}`}>
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

        {isLoading && (
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
      </Ul>
      {loading && <img className="loadingSvg" src={LoadingSvg} alt='loading' />}
    </ProductsSection>
  );
}
