import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../../axiosConfig/api.js";
import {
  decreaseCartItem,
  removeFromCart,
  increaseCartItem,
  clearCart,
} from "../../redux/cartSlice";
import RenderOnTop from "../../components/RenderOnTop/";
import GoToShopping from "../../components/buttonToShop/index.js";

import {
  CartSection,
  Content,
  FirstColumn,
  SecondColumn,
} from "./style";
import { Container } from "../../styles/GlobalStyles";

export default function CartPage() {
  const { cartItems } = useSelector((state) => state.cart);
  const { user, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleCheckOut = async (user, token) => {
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

    if (token !== "") {
      const { data } = await api.post("/checkout", order, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return handleCongrats(data);
    } else {
      return navigate("/account", {
        state: { from: "/cart" },
      });
    }
  };

  const handleCongrats = (data) => {
    dispatch(clearCart());
    navigate("/congrats", { state: { data: data } });
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
                        <h4>Pre??o</h4>
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
              <GoToShopping />
          )}
        </Content>
      </Container>
      <RenderOnTop />
    </CartSection>
  );
}
