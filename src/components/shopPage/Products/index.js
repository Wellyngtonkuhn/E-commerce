import { Link } from "react-router-dom";
import { ProductsSection, Ul } from "./style";

export default function Products({ data, isLoading }) {
  return (
    <ProductsSection>
      {isLoading && <h1>Carregando...</h1>}
      <Ul>
        {data &&
          data.map((item) => (
            <li key={item.id}>
              <img src={item.url} alt={item.nome} />
              <h3>{item.nome}</h3>
              <p>{item.preco}</p>
              <Link to="#"> Comprar</Link>
            </li>
          ))}
      </Ul>
    </ProductsSection>
  );
}
