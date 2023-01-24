import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleCheckoutTax } from "../../../redux/checkout";
import Cart from '../Cart'

import { useNavigate } from "react-router-dom";
import { api } from "../../../axiosConfig/api";

export default function Payment({ token }) {
  const { cartItems } = useSelector((state) => state.cart);
  const { userCheckoutAddress } = useSelector((state) => state.checkout);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const args = {
    sCepDestino: userCheckoutAddress?.cep,
    nVlPeso: "1",
    nCdFormato: "1",
    nVlComprimento: "20",
    nVlAltura: "20",
    nVlLargura: "20",
    nCdServico: ["04014"],
    nVlDiametro: 0,
  };

  useEffect(() => {
    if (!token)
      navigate("/account", {
        state: { from: "/cart/payment" },
      });
  }, [token]);

  useEffect(() => {
    api
      .post(`/checkout/delivery-time`, args, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => dispatch(handleCheckoutTax(res.data.response)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    <h5 style={{marginBottom: '1rem'}}>Revise sua compra antes de prosseguir para o pagamento</h5>
    <h5 style={{marginBottom: '1rem'}}>Na próxima tela você encontrará informações para concluir a compra em modo de teste</h5>
      <Cart cartItems={cartItems} />
    </>
  );
}
