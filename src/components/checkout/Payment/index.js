import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


export default function Payment({ token }) {
  const navigate = useNavigate()

  useEffect(() => {
    if(!token) navigate("/account", {
      state: { from: "/cart/payment" },
    }) 
  }, [])
  
  return (
    <div>Payment</div>
  )
}
