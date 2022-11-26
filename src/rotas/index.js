import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Shop from "../pages/shop";
import SingleProduct from "../pages/singleProduct";
import AccountPage from "../pages/account";

export default function Rotas() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:product/:id" element={<SingleProduct />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </>
  );
}
