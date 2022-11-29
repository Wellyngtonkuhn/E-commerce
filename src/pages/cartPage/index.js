import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCartItem, removeFromCart, increaseCartItem } from "../../redux/cartSlice";

import {
  CartSection,
  Content,
  FirstColumn,
  SecondColumn,
  ShopNow,
} from "./style";
import { Container } from "../../styles/GlobalStyles";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CartPage() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <CartSection>
      <Container>
        <h3 className="cartTitle">Carrinho</h3>
        <Content>
          {cartItems.length > 0 ? (
            <>
              <FirstColumn>
                <ul>
                  {cartItems?.map((item) => (
                    <li key={item.id}>
                      <div className="product">
                        <div>
                          <img src={item.url} alt={item.nome} />
                          <h3>{item.nome}</h3>
                        </div>
                        <button onClick={() => dispatch(removeFromCart(item))}>
                          Remover
                        </button>
                      </div>

                      <div className="price">
                        <h4>Preço</h4>
                        <p>R${item.preco}</p>
                      </div>

                      <div className="quantity">
                        <h4>Quantidade</h4>
                        <div>
                          <button onClick={()=> dispatch(decreaseCartItem(item))}>-</button>
                          <p>{item.itemQuantity}</p>
                          <button onClick={()=> dispatch(increaseCartItem(item))}>+</button>
                        </div>
                      </div>

                      <div className="total">
                        <h4>Total</h4>
                        <p>R$1547,00</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </FirstColumn>
              <SecondColumn>
                <div>
                  <p>Entrega</p>
                  <p>R$0</p>
                </div>
                <div>
                  <p>Desconto</p>
                  <p>R$0</p>
                </div>

                <div className="finalTotal">
                  <p>Total</p>
                  <p>R$1542,00</p>
                </div>
                <button>Finalizar compra</button>
              </SecondColumn>
            </>
          ) : (
            <ShopNow>
              <Link to="/shop">
                <FontAwesomeIcon icon={faShop} />
                Go to Shopping
              </Link>
            </ShopNow>
          )}
        </Content>
      </Container>
    </CartSection>
  );
}
