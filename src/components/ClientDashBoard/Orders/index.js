import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { api } from "../../../axiosConfig/api";
import { Link } from "react-router-dom";
import { Order, OrderContent } from "./style";


export default function Orders() {
  const order = []
  const { token, user } = useSelector(state => state.user)

  const { data } = useQuery(['orders'], async ()=>{
      const request = await api.get(`/orders/${user?.id}`, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      })
      return request.data
  })

  console.log(data)
  return (
    <Order>
      <h3>Pedidos</h3>

      {order &&
        order.map((item) => (
          <OrderContent key={item.orderNumber}>
            <div className="firsRow">
              <div className="firstCollumn">
                {item.img.map((img) => (
                  <img src={img.url} alt="product" />
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
                  Pedido<span>{item.orderNumber}</span>
                </h4>
                <div className="separator"></div>
              </div>
              <div>
                <h4>
                  Enviado<span>{item.shippedDate}</span>
                </h4>
                <div className="separator"></div>
              </div>

              <div>
                <h4>
                  Total
                  <span>
                    {item.Total.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </h4>
                <div className="separator"></div>
              </div>
              <div>
                <h4>
                  Status<span className={item.class}>{item.status}</span>
                </h4>
              </div>
            </div>
          </OrderContent>
        ))}
    </Order>
  );
}
