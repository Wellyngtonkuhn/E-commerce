import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { CongratsSection, Content } from "./style";
import { Container } from "../../styles/GlobalStyles";
import RenderOnTop from "../../components/RenderOnTop";

export default function Congrats() {
  const [order, setOrder] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setOrder(location?.state?.data);
  }, []);

  return (
    <CongratsSection>
      <Container>
        <Content>
          <div>
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
