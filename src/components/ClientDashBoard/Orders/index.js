import { Link } from "react-router-dom";
import { Order, OrderContent } from "./style";

const order = [
  {
    img: [
      { url: "https://thumbs2.imgbox.com/96/46/BzWu3TvY_b.png" },
      { url: "https://thumbs2.imgbox.com/96/46/BzWu3TvY_b.png" },
      { url: "https://thumbs2.imgbox.com/96/46/BzWu3TvY_b.png" },
      { url: "https://thumbs2.imgbox.com/96/46/BzWu3TvY_b.png" },
    ],
    orderNumber: 7845484,
    shippedDate: "14 March 2022",
    Total: "102,55",
    status: "Cancelled",
    class: "cancelled",
  },
  {
    img: [
      { url: "https://thumbs2.imgbox.com/96/46/BzWu3TvY_b.png" },
      { url: "https://thumbs2.imgbox.com/96/46/BzWu3TvY_b.png" },
    ],
    orderNumber: 47555,
    shippedDate: "14 Jun 2022",
    Total: "502,55",
    status: "Processing",
    class: "processing",
  },
  {
    img: [
      { url: "https://thumbs2.imgbox.com/96/46/BzWu3TvY_b.png" },
      { url: "https://thumbs2.imgbox.com/96/46/BzWu3TvY_b.png" },
      { url: "https://thumbs2.imgbox.com/96/46/BzWu3TvY_b.png" },
    ],
    orderNumber: 7845484,
    shippedDate: "30 April 2022",
    Total: "1002,55",
    status: "Out for delivery",
    class: "atTheWay",
  },
  {
    img: [
      { url: "https://thumbs2.imgbox.com/96/46/BzWu3TvY_b.png" },
      { url: "https://thumbs2.imgbox.com/96/46/BzWu3TvY_b.png" },
      { url: "https://thumbs2.imgbox.com/96/46/BzWu3TvY_b.png" },
      { url: "https://thumbs2.imgbox.com/96/46/BzWu3TvY_b.png" },
      { url: "https://thumbs2.imgbox.com/96/46/BzWu3TvY_b.png" },
      { url: "https://thumbs2.imgbox.com/96/46/BzWu3TvY_b.png" },
    ],
    orderNumber: 7845484,
    shippedDate: "14 November 2022",
    Total: "102,55",
    status: "Delivered",
    class: "delivered",
  },
];

export default function Orders() {
  return (
    <Order>
      <h3>Orders</h3>

      <OrderContent>
        {order &&
          order.map((item) => (
            <>
              <div className="firsColumn">
                <div>
                  {item.img.map((img) => (
                    <img src={img.url} alt="product" />
                  ))}
                </div>
                <div>
                  <Link to="#">View Order</Link>
                  <Link to="#">Track Order</Link>
                </div>
              </div>

              <div className="secondColumn">
                <h4>
                  Order number<span>{item.orderNumber}</span>
                </h4>
                <div className="separator"></div>
                <h4>
                  Shipped date<span>{item.shippedDate}</span>
                </h4>
                <div className="separator"></div>
                <h4>
                  Total<span>R$ {item.Total}</span>
                </h4>
                <div className="separator"></div>
                <h4>
                  Status<span className={item.class}>{item.status}</span>
                </h4>
              </div>
            </>
          ))}
      </OrderContent>
    </Order>
  );
}