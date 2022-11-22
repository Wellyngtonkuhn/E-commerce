import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../styles/GlobalStyles";

import {
  Header,
  HeaderContent,
  Menu,
  MenuMobile,
  Cart,
  MenuBurgerMobile,
} from "./style";

import { Logo, MenuBurger, CartImg } from "../../assets/header/";

export default function NavBar() {
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  const hadleToggleMenuMobile = () => {
    setShowMenuMobile(!showMenuMobile);
  };

  const handleCloseMenuMobile = () => {
    setShowMenuMobile(false);
  };

  return (
    <Header>
      <Container>
        <HeaderContent>
          <Link to="/" onClick={handleCloseMenuMobile}>
            <img src={Logo} alt="Eyewear" />
          </Link>
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
              <button onClick={hadleToggleMenuMobile}>
                <img src={MenuBurger} alt="menu-burger" />
              </button>
            </MenuMobile>

            <a href="#">
              <img src={CartImg} alt="cart" />
            </a>
          </Cart>
        </HeaderContent>
      </Container>
      {showMenuMobile && (
        <MenuBurgerMobile>
          <p onClick={handleCloseMenuMobile}>X</p>
          <ul>
            <li>
              <Link onClick={handleCloseMenuMobile} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={handleCloseMenuMobile} to="/shop">
                Shop now
              </Link>
            </li>
            <li>
              <Link onClick={handleCloseMenuMobile} to="/account">
                My account
              </Link>
            </li>
          </ul>
        </MenuBurgerMobile>
      )}
    </Header>
  );
}
