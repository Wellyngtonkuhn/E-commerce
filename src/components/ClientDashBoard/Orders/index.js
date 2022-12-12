import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { api } from "../../../axiosConfig/api";
import { Link } from "react-router-dom";
import { Order, OrderContent } from "./style";

export default function Orders() {
  const { token, user } = useSelector((state) => state.user);

  const { data } = useQuery(["orders"], async () => {
    const request = await api.get(`/orders/${user?.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return request.data;
  });

  console.log(data)

  return (
    <Order>
      <h3>Pedidos</h3>

      {data &&
        data.map((item) => (
          <OrderContent key={item.userId}>
            <div className="firsRow">
              <div className="firstCollumn">
                {item?.product.map((product) => (
                  <div key={item._id}>
                    <img src={product.url} alt={item._id} />
                    <h3>{product.name}</h3>
                    <h4>
                      Quantidade: <span>{product.quantity}</span>
                    </h4>
                    <h4>
                      Preço: <span>{product.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}</span>
                    </h4>
                  </div>
                ))}
              </div>
              <div className="secondColumn">
                <Link to="#">Ver Pedido</Link>
                <Link to="#">Ver Entrega</Link>
              </div>
            </div>

            <div className="secondRow">
              <div>
                <h4>
                  Pedido<span>{item._id}</span>
                </h4>
                <div className="separator"></div>
              </div>
              <div>
                <h4>
                  Enviado<span>{item.shipped}</span>
                </h4>
                <div className="separator"></div>
              </div>

              <div>
                <h4>
                  Total
                  <span>
                    {item.totalPrice.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </h4>
                <div className="separator"></div>
              </div>
              <div>
                <h4>
                  Status
                  <span className={item.orderStatus}>{item.orderStatus}</span>
                </h4>
              </div>
              <div>
                <h4>
                Pagamento
                  <span className={item.paymentStatus}>{item.paymentStatus}</span>
                </h4>
              </div>
            </div>
          </OrderContent>
        ))}
    </Order>
  );
}
