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

  console.log(data);

  return (
    <Favorite>
      <h3>Favoritos</h3>
      <div>
        <tr>
          <td>Imagem</td>
          <td>Produto</td>
          <td>Preço</td>
          <td className="removeTitle">Remover</td>
        </tr>
      </div>

      {data?.favorites &&
        data?.favorites.map((item) => (
          <FavoriteContent key={item.id}>
            <ul>
              <li>
                <img src={item.img} alt={item.name} />
              </li>
              <li>
                <p className="productName">{item.name}</p>
              </li>
              <li>
                <p>
                  {item.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </li>
              <li className="actions">
                <a >X</a>

                <Link to={`/shop/${item.name}/${item.productId}`} >Ver</Link>
              </li>
            </ul>
          </FavoriteContent>
        ))}
    </Favorite>
  );
}
