import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
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

  const { user, token } = useSelector((state) => state.user);
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery(["favorites"], async () => {
    const request = await api.get(`/favorites/${user?.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return request.data;
  },{
    refetchOnWindowFocus: false
  });


  const handleDeleteMutation = useMutation({
    mutationFn: (id) => {
      const response = api.delete(`/favorites/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      return response
    },
    onSuccess: ({ data }, variables) => {
      queryClient.setQueryData(['favorites'], (favorites) => {
       return favorites.filter(favorite => favorite._id != variables)
      })
      toast.success(`${data?.message}`, {
        position: "top-right",
        autoClose: 3000,
      });
    },
    onError: (error) => {
      return toast.error(`${error?.response?.data?.message}`, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  })

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

      {data?.length === 0 && !isLoading && (
        <GotoShopping />
      )}

      {
        data?.map((item) => (
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
              <button onClick={() => handleDeleteMutation.mutate(item._id)}>
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
              <Link to={`/shop/${item.name}/${item.productId}`}>
                <FontAwesomeIcon icon={faEye} />
              </Link>
            </div>
          </FavoriteContent>
        ))
      }
         {handleDeleteMutation.isLoading && <img className="loadingSvg" src={LoadingSvg} alt='loading' />}
    </Favorite>
  );
}
