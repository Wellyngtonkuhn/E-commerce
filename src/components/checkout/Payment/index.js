
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { api } from "../../../axiosConfig/api"


export default function Payment({ token }) {

  const { userCheckoutInfo, userCheckoutAddress } = useSelector(state => state.checkout)
  const navigate = useNavigate()

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

  /*
  useEffect( async () => {
      const request = await api.post(`/checkout/delivery-time`, args, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(request)

  }, [args])
  */




  //console.log(userCheckoutInfo)
  //console.log(userCheckoutAddress)
  
  return (

    <div>Payment em Desenvolvimeto</div>
  )
}
