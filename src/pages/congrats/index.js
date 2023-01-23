import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { CongratsSection, Content } from "./style";
import { Container } from "../../styles/GlobalStyles";
import RenderOnTop from "../../components/RenderOnTop";
import axios from "axios";

export default function Congrats() {
  const [order, setOrder] = useState([]);
  const [paymentStatus, setPaymentStatus] = useState()
  const location = useLocation();

  useEffect(() => {
    setOrder(location?.state?.data);
  }, []);


  useEffect(() => {
    checkPaymentStatus()
  }, []);

  const checkPaymentStatus = async () => {

    const request = await axios.post(`https://api.stripe.com/v1/payment_intents/pi_1EUuaTJxRPM20N1wHXJFZHcJ/capture\
    -u cs_test_a1kPW6DGhty3vFYT8esTKbZYGfgAbhYmvNdu9q2llA5UmK5Ri0UY0xGI44`)
   
    return setPaymentStatus(request)
  }

  console.log(paymentStatus)

  return (
    <CongratsSection>
      <Container>
        <Content>
          <div>
             <h3>Verificando pagamento, logo você receberá a confirmação</h3>
             <h4>Em desenvolvimeto...</h4>
            <h3>{order?.message}</h3>
            <h4>
              Pedido - <span>{order?.order?._id}</span>
            </h4>
            <h4>
              Pagamento - <span className={order?.order?.paymentStatus}>{order?.order?.paymentStatus}</span>
            </h4>
          </div>
        </Content>
      </Container>
      <RenderOnTop />
    </CongratsSection>
  );
}
