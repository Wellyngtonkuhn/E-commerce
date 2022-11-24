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

export default function ClientNavBar({
  showMenuMobile,
  setShowMenuMobile,
  handleToken,
  setshowMenuClientContent,
}) {
  const handleMobileMenu = (path) => {
    setshowMenuClientContent(path);
    setShowMenuMobile(false);
  };

  return (
    <>
      {showMenuMobile ? (
        <MenuContentMobile>
          <ul>
            <li>
              <Link onClick={() => handleMobileMenu("orders")}>
                <div>
                  <FontAwesomeIcon icon={faCartFlatbedSuitcase} />
                  Pedidos
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
            <li>
              <Link onClick={() => handleMobileMenu("favorites")}>
                <div>
                  <FontAwesomeIcon icon={faHeart} />
                  Favoritos
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
            <li>
              <Link onClick={() => handleMobileMenu("myAccount")}>
                <div>
                  <FontAwesomeIcon icon={faUser} />
                  Minha conta
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
            <li>
              <Link onClick={() => handleMobileMenu("address")}>
                <div>
                  <FontAwesomeIcon icon={faHouse} />
                  Endereço
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
            <li>
              <Link onClick={() => handleMobileMenu("changePassword")}>
                <div>
                  <FontAwesomeIcon icon={faLock} />
                  Mudar senha
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
            <li>
              <Link onClick={handleToken}>
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
              <Link onClick={() => setshowMenuClientContent("orders")}>
                <div>
                  <FontAwesomeIcon icon={faCartFlatbedSuitcase} />
                  Pedidos
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>

            <li>
              <Link onClick={() => setshowMenuClientContent("favorites")}>
                <div>
                  <FontAwesomeIcon icon={faHeart} />
                  Favoritos
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
            <li>
              <Link onClick={() => setshowMenuClientContent("myAccount")}>
                <div>
                  <FontAwesomeIcon icon={faUser} />
                  Minha conta
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
            <li>
              <Link onClick={() => setshowMenuClientContent("address")}>
                <div>
                  <FontAwesomeIcon icon={faHouse} />
                  Endereço
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
            <li>
              <Link onClick={() => setshowMenuClientContent("changePassword")}>
                <div>
                  <FontAwesomeIcon icon={faLock} />
                  Mudar senha
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
            <li>
              <Link onClick={handleToken}>
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
