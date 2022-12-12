import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../../axiosConfig/api.js";
import {
  decreaseCartItem,
  removeFromCart,
  increaseCartItem,
} from "../../redux/cartSlice";
import RenderOnTop from "../../components/RenderOnTop/";

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
  const { user, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const totalPrice = () => {
    const totalProduct = cartItems.map((item) => {
      const totalItem = item.preco * item.itemQuantity;
      return totalItem;
    });
    const finalTotal = totalProduct.reduce((acc, curr) => {
      return acc + curr;
    }, 0);

    return Number(finalTotal);
  };

  const handleCheckOut = async(user, token) => {
    const order = {
      userId: user.id,
      product: cartItems.map((item) => {
        return {
          name: item.nome,
          quantity: item.itemQuantity,
          url: item.url,
          price: item.preco,
        };
      }),
      totalPrice: totalPrice(),
      shipped: "05/12/2022",
      orderStatus: "processing",
      paymentStatus: "approved",
    };

    const { data } = await api.post('/checkout', order,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    console.log(data)
  };

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
                          <button
                            onClick={() => dispatch(decreaseCartItem(item))}
                          >
                            -
                          </button>
                          <p>{item.itemQuantity}</p>
                          <button
                            onClick={() => dispatch(increaseCartItem(item))}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="total">
                        <h4>Total</h4>
                        <p>
                          {(
                            Number(item.preco) * item.itemQuantity
                          ).toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </p>
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
                  <p>
                    {totalPrice().toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
                <button onClick={() => handleCheckOut(user, token)}>
                  Finalizar compra
                </button>
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
      <RenderOnTop />
    </CartSection>
  );
}
