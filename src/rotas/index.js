import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Shop from "../pages/shop";
import Account from "../pages/account";

export default function Rotas() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
}
