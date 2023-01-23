import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { api } from "../../axiosConfig/api.js";
import RenderOnTop from "../../components/RenderOnTop/";
import GoToShopping from "../../components/buttonToShop/index.js";

import { CartSection, Content, FirstColumn, SecondColumn } from "./style";
import { Container } from "../../styles/GlobalStyles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";


export default function CartPage() {
  const [buyUrl, setBuyUrl] = useState('')
  const { cartItems } = useSelector((state) => state.cart);
  const { userCheckoutInfo, userCheckoutAddress, deliveryTax } = useSelector((state) => state.checkout);
  const { user, token } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation()

  const totalPrice = () => {
    const totalProduct = cartItems.map((item) => {
      const totalItem = item.preco * item.itemQuantity;
      return totalItem;
    });
    const totalCart = totalProduct.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    
    const totalTax = deliveryTax[0]?.Valor.replace(',','.')
    const total = totalTax ? Number(totalTax) + totalCart : totalCart
   
    return Number(total);
  };

    // Path do checkout
    const handleCheckOut = (path) => {
      if(token){
        switch (path) {
          case "details":
            navigate('details')
            break
          case "/cart/details":
            navigate('user-info')
            break
          case '/cart/user-info':
            if(userCheckoutInfo.length === 0){
              return alert('Preencha e salve os dados para prosseguir')
            }
              navigate('user-address')
            break
          case '/cart/user-address':
            if(userCheckoutAddress.length === 0){
              return alert('Preencha e salve os dados para prosseguir')
            }
            navigate('payment')
            break
          default:
            break;
        }
      }else{
        navigate("/account", {
        state: { from: "/cart/user-info" },
        }) 
      }
    }

  const handleCheckOutPayment = async () => {
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
      deliveryTax: deliveryTax[0]?.Valor.replace(',','.'),
      shipped: "05/12/2022",
      orderStatus: "processing",
      paymentStatus: "approved",
    };

    if (token !== "") {
      const request = await api.post("/checkout", order, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return setBuyUrl(request)
      
    } else {
      return navigate("/account", {
        state: { from: "/cart" },
      });
    }
  };

  useEffect(() => {
    handleCheckOutPayment()
  },[cartItems, deliveryTax])


  return (
    <CartSection>
      <div className="buySteps">
        <ul>
          <li>
            <button onClick={() => handleCheckOut('details')} >
              <FontAwesomeIcon icon={faCheckCircle} color={"#4ECD82"} />
              Carrinho
            </button>
          </li>
          <li>
            <button onClick={()=> handleCheckOut('/cart/details')}>
              <FontAwesomeIcon
                icon={faCheckCircle}
                color={(location.pathname === "/cart/user-info" || location.pathname === "/cart/user-address" || location.pathname === "/cart/payment") && "#4ECD82"}
              />
              Dados
            </button>
          </li>
          <li>
            <button onClick={() => handleCheckOut('/cart/user-info')}>
              <FontAwesomeIcon
                icon={faCheckCircle}
                color={(location.pathname === "/cart/user-address" || location.pathname === "/cart/payment") && "#4ECD82"}
              />
              Endereço
            </button>
          </li>
          <li>
            <button onClick={() => handleCheckOut('/cart/user-address')} >
              <FontAwesomeIcon
                icon={faCheckCircle}
                color={location.pathname === "/cart/payment" && "#4ECD82"}
              />
              Pagamento
            </button>
          </li>
        </ul>
      </div>
      <Container>
        <h3 className="cartTitle">
          {location.pathname === "/cart/details" && "Carrinho"}
          {location.pathname === "/cart/user-info" && "Dados"}
          {location.pathname === "/cart/user-address" && "Endereço"}
          {location.pathname === "/cart/payment" && "Pagamento"}
        </h3>
        <Content>
          {cartItems.length > 0 ? (
            <>
            <FirstColumn>
              <Outlet />
            </FirstColumn>
            
            <SecondColumn>
              <div className="finalTotal">
                <div>
                  <p>Frete</p>
                  <p>R$ {deliveryTax ? deliveryTax?.map(item => item.Valor) : '00,00'}</p>  
                </div>
                <div>
                  {deliveryTax && <p className="deliveryTime">Entrega prevista em {deliveryTax[0]?.PrazoEntrega} dias</p>}
                </div>
                <div>
                  <p>Total</p>
                  <p>
                    {totalPrice().toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
              </div>  
                {location.pathname === '/cart/payment' ? (
                  <a href={buyUrl?.data?.url}>Finalizar Compra</a>
                ): (
                  <button
                    disabled={!cartItems}
                    onClick={() => handleCheckOut(location.pathname)}>
                      Próximo
                  </button>     
                )}              
                
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
