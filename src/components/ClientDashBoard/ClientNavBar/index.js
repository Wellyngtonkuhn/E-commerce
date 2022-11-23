import { useState } from "react";
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
import { MenuContent } from "./style";

export default function ClientNavBar({
  handleToken,
  setshowMenuClientContent,
}) {
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  return (
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
  );
}
