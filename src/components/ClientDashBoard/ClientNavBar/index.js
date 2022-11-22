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

export default function ClientNavBar() {
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  return (
    <MenuContent>
      <ul>
        <li>
          <Link to="#">
            <div>
              <FontAwesomeIcon icon={faCartFlatbedSuitcase} />
              Orders
            </div>
            <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </li>

        <li>
          <Link to="#">
            <div>
              <FontAwesomeIcon icon={faHeart} />
              Favorites
            </div>
            <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </li>
        <li>
          <Link to="#">
            <div>
              <FontAwesomeIcon icon={faUser} />
              My account
            </div>
            <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </li>
        <li>
          <Link to="#">
            <div>
              <FontAwesomeIcon icon={faHouse} />
              Address
            </div>
            <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </li>
        <li>
          <Link to="#">
            <div>
              <FontAwesomeIcon icon={faLock} />
              Change password
            </div>
            <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </li>
        <li>
          <Link to="#">
            <div>
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              Sign out
            </div>
            <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </li>
      </ul>
    </MenuContent>
  );
}
