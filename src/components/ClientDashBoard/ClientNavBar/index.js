import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  faCartFlatbedSuitcase,
  faHeart,
  faUser,
  faLock,
  faHouse,
  faArrowRightFromBracket,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuContent, MenuContentMobile } from "./style";
import { removeToken } from "../../../redux/userSlice";

export default function ClientNavBar({ showMenuMobileDashBoard, setShowMenuMobileDashBoard }) {
  const dispatch = useDispatch()

  const handleCloseDashBoarMenu = () => {
    return setShowMenuMobileDashBoard(false)
  }

  const handleLogOut = () => {
    dispatch(removeToken())
  };

  return (
    <>
      {showMenuMobileDashBoard ? (
        <MenuContentMobile>
          <ul>
            <li>
              <Link to='orders' onClick={() => handleCloseDashBoarMenu()}>
                <div>
                  <FontAwesomeIcon icon={faCartFlatbedSuitcase} />
                  Pedidos
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
            <li>
              <Link to='favorites' onClick={() => handleCloseDashBoarMenu()}>
                <div>
                  <FontAwesomeIcon icon={faHeart} />
                  Favoritos
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
            <li>
              <Link to='my-account' onClick={() => handleCloseDashBoarMenu()}>
                <div>
                  <FontAwesomeIcon icon={faUser} />
                  Minha conta
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
            <li>
              <Link to='address' onClick={() => handleCloseDashBoarMenu()}>
                <div>
                  <FontAwesomeIcon icon={faHouse} />
                  Endereço
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
            <li>
              <Link to='change-password' onClick={() => handleCloseDashBoarMenu()}>
                <div>
                  <FontAwesomeIcon icon={faLock} />
                  Mudar senha
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
            <li>
              <Link onClick={handleLogOut}>
                <div>
                  <FontAwesomeIcon icon={faArrowRightFromBracket} />
                  Sair
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
          </ul>
        </MenuContentMobile>
      ) : (
        <MenuContent>
          <ul>
            <li>
              <Link to='orders'>
                <div>
                  <FontAwesomeIcon icon={faCartFlatbedSuitcase} />
                  Pedidos
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>

            <li>
              <Link to='favorites'>
                <div>
                  <FontAwesomeIcon icon={faHeart} />
                  Favoritos
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
            <li>
              <Link to='my-account'>
                <div>
                  <FontAwesomeIcon icon={faUser} />
                  Minha conta
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
            <li>
              <Link to='address'>
                <div>
                  <FontAwesomeIcon icon={faHouse} />
                  Endereço
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
            <li>
              <Link to='change-password'>
                <div>
                  <FontAwesomeIcon icon={faLock} />
                  Mudar senha
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
            <li>
              <Link onClick={handleLogOut}>
                <div>
                  <FontAwesomeIcon icon={faArrowRightFromBracket} />
                  Sair
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
          </ul>
        </MenuContent>
      )}
    </>
  );
}
