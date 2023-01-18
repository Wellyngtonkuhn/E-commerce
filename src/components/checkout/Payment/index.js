
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { handleCheckoutTax } from "../../../redux/checkout"

import { useNavigate } from "react-router-dom"
import { api } from "../../../axiosConfig/api"



export default function Payment({ token }) {
  const { userCheckoutInfo, userCheckoutAddress, deliveryTax } = useSelector(state => state.checkout)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const args = {
    sCepDestino: userCheckoutAddress?.cep
    ,
    nVlPeso: "1",
    nCdFormato: "1",
    nVlComprimento: "20",
    nVlAltura: "20",
    nVlLargura: "20",
    nCdServico: ["04014"],
    nVlDiametro: 0
  }

  useEffect(() => {
    if(!token) navigate("/account", {
      state: { from: "/cart/payment" },
    }) 
  }, [token])

  useEffect(() => {
     api.post(`/checkout/delivery-time`, args, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => dispatch(handleCheckoutTax(res.data.response)))
      .catch(err => console.log(err)) 
  }, [])
  

  return (

    <div>Payment em Desenvolvimeto</div>
  )
}
