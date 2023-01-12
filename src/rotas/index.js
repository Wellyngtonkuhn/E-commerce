import { Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import Shop from "../pages/shop";
import SingleProduct from "../pages/singleProduct";
import AccountPage from "../pages/account";
import CartPage from "../pages/cartPage";
import Congrats from "../pages/congrats";

import { useQuery } from "@tanstack/react-query";
import { api } from "../axiosConfig/api";
import { useSelector } from "react-redux";

import UserData from "../components/checkout/UserData";
import Cart from "../components/checkout/Cart";
import Payment from "../components/checkout/Payment";
import UserAddress from "../components/checkout/UserAddress";


export default function Rotas() {
  const { cartItems } = useSelector((state) => state.cart);
  const { user, token } = useSelector((state) => state.user);

  const { data } = useQuery(['userData'], async () => {
    if(user?.id){
      const request = await api.get(`/user/${user?.id}` ,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      return request.data
    }
    return null
  },{
    staleTime: (1000 * 60) * 60 // 1 hora 
  })

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:product/:_id" element={<SingleProduct />} />
        <Route path="/account" element={<AccountPage />} />

        <Route path="/cart" element={<CartPage />}>
          <Route path="details" element={<Cart cartItems={cartItems}/>} />
          <Route path="user-info" element={<UserData data={data} token={token} />} />
          <Route path="user-address" element={<UserAddress data={data} user={user} token={token} />} />
          <Route path="payment" element={<Payment token={token} />} />
        </Route>

        <Route path="/congrats" element={<Congrats />} />
      </Routes>
    </>
  );
}
