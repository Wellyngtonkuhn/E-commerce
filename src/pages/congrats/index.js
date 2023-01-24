import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { CongratsSection, Content } from "./style";
import { Container } from "../../styles/GlobalStyles";
import RenderOnTop from "../../components/RenderOnTop";
import { api } from '../../axiosConfig/api.js'

import Loading from '../../assets/loading.svg'

export default function Congrats() {
  const [order, setOrder] = useState([]);
  const [sessionPayment, setSessionPayment] = useState()
  const [isLoading, setIsloading] = useState(true)
  const { cartItems } = useSelector(state => state.cart)
  const { user, token } = useSelector(state => state.user)
  const { userCheckoutInfo, userCheckoutAddress, deliveryTax } = useSelector((state) => state.checkout);
  const location = useLocation();
  const [searchParams] = useSearchParams()
  const sessionID = searchParams.get('sessionID')


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

  const checkPaymentStatus = async () => {
    setIsloading(true)
    const order = {
      userId: user.id,
      sessionIdPayment: sessionID,
      product: cartItems.map((item) => {
        return {
          name: item.nome,
          quantity: item.itemQuantity,
          url: item.url,
          price: item.preco,
        };
      }),
      totalPrice: totalPrice(),
      deliveryTax: deliveryTax ? deliveryTax[0]?.Valor.replace(',','.') : 0,
      shipped: "05/12/2022",
      orderStatus: "processing",
      paymentStatus: "",
      addressed:{
        cep: userCheckoutAddress.cep,
        addressee: userCheckoutAddress.addressee, 
        addresseeCpf: userCheckoutAddress.addresseeCpf, 
        street: userCheckoutAddress.street, 
        number: userCheckoutAddress.number, 
        complement: userCheckoutAddress.complement, 
        district: userCheckoutAddress.district, 
        city: userCheckoutAddress.city, 
        state: userCheckoutAddress.state, 
        reference: userCheckoutAddress.reference
        }
    };

    const request = await api.post('/checkout/webhook', order, {
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    setIsloading(false)
    setOrder(request.data.order)
    setSessionPayment(request.data.session)
    return
  }

  useEffect(() => {
    checkPaymentStatus()
  }, []);

  console.log(order)

  return (
    <CongratsSection>
      <Container>
        <Content>
          <div>
             <h3>Verificando pagamento, logo você receberá a confirmação.</h3>
             {isLoading ? (
               <img className="loading" src={Loading} alt='loading'/>
               ) : (
                <>
                  <h3>{order?.message}</h3>
                  <h4>
                    Pedido - <span>{order?._id}</span>
                  </h4>
                  <h4>
                    Pagamento - <span className={order?.paymentStatus}>Aprovado</span>
                  </h4>
                  <Link to='/account'>Acompanhar pedido</Link>
                </>
               )}
          </div>
        </Content>
      </Container>
      <RenderOnTop />
    </CongratsSection>
  );
}
