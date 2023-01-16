import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { faEye, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Favorite, FavoriteContent } from "./style";

import GotoShopping from '../../buttonToShop/index.js'
import { api } from "../../../axiosConfig/api";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSvg from '../../../assets/loading.svg'

export default function Favorites() {
  const [Loading, setloading] = useState(false)

  const { user, token } = useSelector((state) => state.user);
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery(["favorites"], async () => {
    const request = await api.get(`/favorites/${user?.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return request.data;
  });

  const handleDeleteFavorite = async (favoriteId) => {
    setloading(true)
    const deleteFavorite = await api.delete(`/favorites/${favoriteId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (deleteFavorite.status === 200) {
      setloading(false)
      queryClient.invalidateQueries(["favorites"]);
      return toast.success(`${deleteFavorite.data.message}`, {
        position: "top-right",
        autoClose: 3000,
      });
    } else {
      return alert(deleteFavorite.data.message);
    }
  };

  return (
    <Favorite>
      <h3>Favoritos</h3>
      <div className="headTitles">
        <p>Imagem</p>
        <p>Produto</p>
        <p>Preço</p>
        <p className="removeTitle">Ações</p>
      </div>

      {isLoading && (
        <div className="loadingContent">
          <div className="loading"></div>
          <div className="loading"></div>
          <div className="loading"></div>
          <div className="loading"></div>
        </div>
      )}

      {data?.favorites.length === 0 && !isLoading && (
        <GotoShopping />
      )}

      {data?.favorites &&
        data?.favorites.map((item) => (
          <FavoriteContent key={item._id}>
            <div className="firstColumn">
              <img src={item.img} alt={item.name} />
              <p className="productName">{item.name}</p>
              <p>
                {item.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>

            <div className="secondColumn">
              <button onClick={() => handleDeleteFavorite(item._id)}>
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
              <Link to={`/shop/${item.name}/${item.productId}`}>
                <FontAwesomeIcon icon={faEye} />
              </Link>
            </div>
          </FavoriteContent>
        ))}
         {Loading && <img className="loadingSvg" src={LoadingSvg} alt='loading' />}
    </Favorite>
  );
}
