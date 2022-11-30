import { Favorite, FavoriteContent } from "./style";

const favorites = [
  {
    id: 1,
    nome: "Aviator Classic Ouro",
    modelo: "Ouro - Lentes: Verde Classic G-15  +  Armação: Ouro",
    tamanho: "XL (58-14)",
    preco: 3459,
    quantidade: "10",
    marca: "Carrera",
    descricao:
      "Atualmente um dos modelos de óculos de sol mais icônicos do mundo, os óculos de sol Ray-Ban Aviator Classic foram riginalmente criados aos pilotos americanos em 1937. Os óculos de sol Aviator Classic são um modelo atemporal que combina o grande estilo Aviator com qualidade, desempenho e conforto excepcionais. Com a armação dourada clássica, você pode ver o mundo através de uma variedade de cores de lentes como as em cristal marrom, verde, as G-15 polarizadas e todas proporcionam um elevado nível de nitidez e 100% de proteção contra os raios UV.",
    url: "https://thumbs2.imgbox.com/96/46/BzWu3TvY_b.png",
    unidadesVendidas: 5,
  },
  {
    id: 2,
    nome: "Aviator Classic Ouro",
    modelo: "Ouro - Lentes: Verde Classic G-15  +  Armação: Ouro",
    tamanho: "XL (58-14)",
    preco: 1500,
    quantidade: "10",
    marca: "Carrera",
    descricao:
      "Atualmente um dos modelos de óculos de sol mais icônicos do mundo, os óculos de sol Ray-Ban Aviator Classic foram riginalmente criados aos pilotos americanos em 1937. Os óculos de sol Aviator Classic são um modelo atemporal que combina o grande estilo Aviator com qualidade, desempenho e conforto excepcionais. Com a armação dourada clássica, você pode ver o mundo através de uma variedade de cores de lentes como as em cristal marrom, verde, as G-15 polarizadas e todas proporcionam um elevado nível de nitidez e 100% de proteção contra os raios UV.",
    url: "https://thumbs2.imgbox.com/96/46/BzWu3TvY_b.png",
    unidadesVendidas: 5,
  },
  {
    id: 3,
    nome: "Aviator Classic Ouro",
    modelo: "Ouro - Lentes: Verde Classic G-15  +  Armação: Ouro",
    tamanho: "XL (58-14)",
    preco: 15000,
    quantidade: "10",
    marca: "Carrera",
    descricao:
      "Atualmente um dos modelos de óculos de sol mais icônicos do mundo, os óculos de sol Ray-Ban Aviator Classic foram riginalmente criados aos pilotos americanos em 1937. Os óculos de sol Aviator Classic são um modelo atemporal que combina o grande estilo Aviator com qualidade, desempenho e conforto excepcionais. Com a armação dourada clássica, você pode ver o mundo através de uma variedade de cores de lentes como as em cristal marrom, verde, as G-15 polarizadas e todas proporcionam um elevado nível de nitidez e 100% de proteção contra os raios UV.",
    url: "https://thumbs2.imgbox.com/96/46/BzWu3TvY_b.png",
    unidadesVendidas: 5,
  },
];

export default function Favorites() {
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

      {favorites &&
        favorites.map((item) => (
          <FavoriteContent key={item.id}>
            <ul>
              <li>
                <img src={item.url} alt={item.nome} />
              </li>
              <li>
                <p>{item.nome}</p>
              </li>
              <li>
                <p>
                  {item.preco.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </li>
              <li>
                <a className="removeFavorite">X</a>
              </li>
            </ul>
          </FavoriteContent>
        ))}
    </Favorite>
  );
}
