import { Link } from "react-router-dom";

import { Header, HeaderContent, Menu, MenuMobile, Cart } from "./style";

import Logo from "../../assets/header/logo.png";
import MenuBurger from "../../assets/header/burger.png";
import CartImg from "../../assets/header/cart.png";

export default function NavBar() {
  return (
    <Header>
      <HeaderContent>
        <img src={Logo} alt="Eyewear" />
        <Menu>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop now</Link>
            </li>
            <li>
              <Link to="/account">My account</Link>
            </li>
          </ul>
        </Menu>

        <Cart>
          <MenuMobile>
            <button>
              <img src={MenuBurger} alt="menu-burger" />
            </button>
          </MenuMobile>
          <a href="#">
            <img src={CartImg} alt="cart" />
          </a>
        </Cart>
      </HeaderContent>
    </Header>
  );
}
