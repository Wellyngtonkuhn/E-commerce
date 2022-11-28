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

import { Logo } from "../../assets/header/";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX, faBagShopping } from "@fortawesome/free-solid-svg-icons";

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
                {!showMenuMobile ? (
                  <FontAwesomeIcon icon={faBars} size={"lg"} />
                ) : (
                  <FontAwesomeIcon icon={faX} size={"lg"} />
                )}
              </button>
            </MenuMobile>

            <Link to="/cart">
              <FontAwesomeIcon icon={faBagShopping} size={"lg"} />
            </Link>
          </Cart>
        </HeaderContent>
      </Container>
      {showMenuMobile && (
        <MenuBurgerMobile>
          <ul>
            <li>
              <Link onClick={handleCloseMenuMobile} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={handleCloseMenuMobile} to="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link onClick={handleCloseMenuMobile} to="/account">
                Minha Conta
              </Link>
            </li>
          </ul>
        </MenuBurgerMobile>
      )}
    </Header>
  );
}
