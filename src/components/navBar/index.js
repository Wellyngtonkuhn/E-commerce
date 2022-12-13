import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import {
  faBars,
  faX,
  faBagShopping,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { removeToken } from "../../redux/userSlice";

export default function NavBar() {
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const length = useSelector((state) => state.cart.cartItems.length);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch()
 

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

            {user?.length !==0 && (
              <Link onClick={() => dispatch(removeToken())} className="cart">
                <FontAwesomeIcon icon={faArrowRightFromBracket} size={"lg"} />
              </Link>
            ) }

            <Link to="/cart" className="cart">
              <p>{length > 0 ? length : ""}</p>
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
