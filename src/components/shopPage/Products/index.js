import { Link } from "react-router-dom";
import { ProductsSection, Ul } from "./style";

export default function Products({ data, isLoading }) {
  return (
    <ProductsSection>
      <Ul>
        {data &&
          data.map((item) => (
            <li key={item.id}>
              <img src={item.url} alt={item.nome} />
              <h3>{item.nome}</h3>
              <p>
                {item.preco.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <Link to={`/shop/${item.nome}/${item.id}`}> Comprar</Link>
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
