import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { api } from "../../../axiosConfig/api";
import { ProductsSection, Ul } from "./style";

export default function Products({ data, isLoading }) {
  const { user, token } = useSelector((state) => state.user);

  const handleFavorite = async (productId) => {
    console.log(productId)
  };

  return (
    <ProductsSection>
      <Ul>
        {data &&
          data.map((item) => (
            <li key={item._id}>
              <img src={item.url} alt={item.nome} />
              <h3>
                <Link to={`/shop/${item.nome}/${item._id}`}>{item.nome}</Link>
              </h3>
              <p>
                {item.preco.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <Link className="btn-buy" to={`/shop/${item.nome}/${item._id}`}>
                {" "}
                Comprar
              </Link>
              <Link
                className="btn-buy"
                onClick={() => handleFavorite(item._id)}
              >
                <FontAwesomeIcon icon={faHeart} />
              </Link>
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
    </ProductsSection>
  );
}
