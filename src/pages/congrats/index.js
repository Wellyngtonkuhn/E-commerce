import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleClearLocalStorageOrder } from "../../redux/checkout";
import { clearCart } from "../../redux/cartSlice";

import { CongratsSection, Content } from "./style";
import { Container } from "../../styles/GlobalStyles";
import RenderOnTop from "../../components/RenderOnTop";
import { api } from '../../axiosConfig/api.js'

import Loading from '../../assets/loading.svg'

export default function Congrats() {
  const [ order, setOrder ] = useState([]);
  const [ isLoading, setIsloading ] = useState(true)
  const { cartItems } = useSelector(state => state.cart)
  const { user, token } = useSelector(state => state.user)
  const { userCheckoutAddress, deliveryTax } = useSelector((state) => state.checkout);
  const [ searchParams ] = useSearchParams()
  const dispatch = useDispatch()
  const sessionID = searchParams.get('sessionID')

  const checkPaymentStatus = async () => {
    setIsloading(true)
    const orderItems = {
      userId: user.id,
      sessionIdPayment: sessionID,
      paymentId: "",
      deliveryTax: deliveryTax ? deliveryTax[0]?.Valor.replace(',','.') : 0,
      product: cartItems.map((item) => {
        return {
          name: item.nome,
          quantity: item.itemQuantity,
          url: item.url,
          price: item.preco,
        };
      }),
      totalPrice: 0,
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

    const request = await api.post('/checkout/webhook', orderItems, {
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    setIsloading(false)
    setOrder(request.data)
    dispatch(handleClearLocalStorageOrder())
    dispatch(clearCart())
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
             {isLoading ? (
              <>
             <h3>Verificando pagamento, logo você receberá a confirmação.</h3>
               <img className="loading" src={Loading} alt='loading'/>
               </>
               ) : (
                <>
                  <h3>{order?.message}</h3>
                  <h4>
                    Pedido - <span>{order?.newOrder?._id}</span>
                  </h4>
                  <h4>
                    Pagamento - <span className={order?.newOrder?.paymentStatus}>Aprovado</span>
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
