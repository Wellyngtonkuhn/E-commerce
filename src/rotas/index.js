import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Shop from "../pages/shop";
import SingleProduct from "../pages/singleProduct";
import AccountPage from "../pages/account";
import CartPage from "../pages/cartPage";
import Congrats from "../pages/congrats";

export default function Rotas() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:product/:_id" element={<SingleProduct />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/congrats" element={<Congrats />} />
      </Routes>
    </>
  );
}
