import { faEye, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { api } from "../../../axiosConfig/api";
import { Favorite, FavoriteContent } from "./style";

export default function Favorites() {
  const { user, token } = useSelector((state) => state.user);

  const { data, isLoading } = useQuery(["favorites"], async () => {
    const request = await api.get(`/favorites/${user?.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return request.data;
  });

  return (
    <Favorite>
      <h3>Favoritos</h3>
      <div className="headTitles">
        <p>Imagem</p>
        <p>Produto</p>
        <p>Preço</p>
        <p className="removeTitle">Ações</p>
      </div>

      {data?.favorites &&
        data?.favorites.map((item) => (
          <FavoriteContent key={item.id}>
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
              <button>
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
              <Link to={`/shop/${item.name}/${item.productId}`}>
                <FontAwesomeIcon icon={faEye} />
              </Link>
            </div>
          </FavoriteContent>
        ))}
    </Favorite>
  );
}
