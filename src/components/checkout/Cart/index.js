import { useDispatch } from "react-redux";
import { decreaseCartItem, removeFromCart, increaseCartItem } from '../../../redux/cartSlice'
import { Ul } from "./style";

export default function Cart({ cartItems }) {
    const dispatch = useDispatch()

  return (
    <Ul>
      {cartItems?.map((item) => (
        <li key={item._id}>
          <div className="product">
            <div>
              <img src={item.url} alt={item.nome} />
              <h3>{item.nome}</h3>
            </div>
            <button
              className="removeButton"
              onClick={() => dispatch(removeFromCart(item))}
            >
              Remover
            </button>
          </div>

          <div className="price">
            <h4>Preço</h4>
            <p>
              {item.preco.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>

          <div className="quantity">
            <h4>Quantidade</h4>
            <div>
              <button onClick={() => dispatch(decreaseCartItem(item))}>
                -
              </button>
              <p>{item.itemQuantity}</p>
              <button onClick={() => dispatch(increaseCartItem(item))}>
                +
              </button>
            </div>
          </div>

          <div className="total">
            <h4>Total</h4>
            <p>
              {(Number(item.preco) * item.itemQuantity).toLocaleString(
                "pt-BR",
                {
                  style: "currency",
                  currency: "BRL",
                }
              )}
            </p>
          </div>
        </li>
      ))}
    </Ul>
  );
}
