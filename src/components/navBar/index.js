import { Link } from "react-router-dom";
import { Container } from "../../styles/GlobalStyles";

import { Header, HeaderContent, Menu, MenuMobile, Cart } from "./style";

import { Logo, MenuBurger, CartImg } from "../../assets/header/";

export default function NavBar() {
  return (
    <Header>
      <Container>
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
      </Container>
    </Header>
  );
}
