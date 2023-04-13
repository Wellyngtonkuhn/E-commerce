import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import { api } from "../axiosConfig/api";
import { useSelector } from "react-redux";

import Orders from "../components/ClientDashBoard/Orders";
import Favorites from '../components/ClientDashBoard/Favorites'
import MyAccount from "../components/ClientDashBoard/MyAccount";
import Address from "../components/ClientDashBoard/Address";
import ChangePassword from "../components/ClientDashBoard/ChangePassword";

import UserData from "../components/checkout/UserData";
import Cart from "../components/checkout/Cart";
import Payment from "../components/checkout/Payment";
import UserAddress from "../components/checkout/UserAddress";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "../components/login";

const Home = lazy(() => import("../pages/home"))
const Shop = lazy(() => import("../pages/shop"))
const SingleProduct = lazy(() => import("../pages/singleProduct"))
const AccountPage = lazy(() => import("../pages/account"))
const CartPage = lazy(() => import("../pages/cartPage"))
const Congrats = lazy(() => import("../pages/congrats"))


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

        <Route path="/account/" element={<ProtectedRoutes>
            <AccountPage />
          </ProtectedRoutes>}>            
            <Route path="orders" element={<Orders />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="my-account" element={<MyAccount />} />
            <Route path="address" element={<Address />} />
            <Route path="change-password" element={<ChangePassword />} />
        </Route>

        <Route path="/cart" element={<CartPage />}>
          <Route path="details" element={<Cart cartItems={cartItems}/>} />
          <Route path="user-info" element={<UserData data={data} token={token} />} />
          <Route path="user-address" element={<UserAddress data={data} user={user} token={token} />} />
          <Route path="payment" element={<Payment token={token} />} />
        </Route>
        
        <Route path="/congrats" element={<Congrats />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
