import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../../axiosConfig/api.js";
import { clearCart } from "../../redux/cartSlice";
import RenderOnTop from "../../components/RenderOnTop/";
import GoToShopping from "../../components/buttonToShop/index.js";

import { CartSection, Content, FirstColumn, SecondColumn } from "./style";
import { Container } from "../../styles/GlobalStyles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import Cart from "../../components/checkout/Cart/index.js";
import UserData from "../../components/checkout/UserData/index.js";
import UserAddress from "../../components/checkout/UserAddress/index.js";
import Payment from "../../components/checkout/Payment/index.js";

export default function CartPage() {
  const [buySteps, setBuySteps] = useState("cart");
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
      <div className="buySteps">
        <ul>
          <li>
            <button onClick={() => setBuySteps("cart")}>
              <FontAwesomeIcon icon={faCheckCircle} color={"#4ECD82"} />
              Carrinho
            </button>
          </li>
          <li>
            <button onClick={() => setBuySteps("userData")}>
              <FontAwesomeIcon
                icon={faCheckCircle}
                color={
                  (buySteps === "userData" ||
                    buySteps === "address" ||
                    buySteps === "payment") &&
                  "#4ECD82"
                }
              />
              Dados
            </button>
          </li>
          <li>
            <button onClick={() => setBuySteps("address")}>
              <FontAwesomeIcon
                icon={faCheckCircle}
                color={
                  (buySteps === "address" || buySteps === "payment") &&
                  "#4ECD82"
                }
              />
              Endereço
            </button>
          </li>
          <li>
            <button onClick={() => setBuySteps("payment")}>
              <FontAwesomeIcon
                icon={faCheckCircle}
                color={buySteps === "payment" && "#4ECD82"}
              />
              Pagamento
            </button>
          </li>
        </ul>
      </div>
      <Container>
        <h3 className="cartTitle">
          {buySteps === "cart" && "Carrinho"}
          {buySteps === "userData" && "Dados"}
          {buySteps === "address" && "Endereço"}
          {buySteps === "payment" && "Pagamento"}
        </h3>
        <Content>
          {cartItems.length > 0 ? (
            <>
              <FirstColumn>
                {buySteps === "cart" && <Cart cartItems={cartItems} />}
                {buySteps === "userData" && <UserData cartItems={cartItems} />}
                {buySteps === "address" && <UserAddress cartItems={cartItems} />}
                {buySteps === "payment" && <Payment cartItems={cartItems} />}
              </FirstColumn>
              <SecondColumn>
                <div className="finalTotal">
                  <p>Total</p>
                  <p>
                    {totalPrice().toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
                <button
                  disabled={!cartItems}
                  onClick={() => {
                    switch (buySteps) {
                      case "cart":
                        return setBuySteps("userData");
                      case 'userData':
                        return setBuySteps('address')
                      case 'address':
                        return setBuySteps('payment')
                      default:
                        break;
                    }
                  }}
                >
                  Próximo
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
