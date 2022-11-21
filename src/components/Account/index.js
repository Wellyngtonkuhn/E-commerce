import { AccountSection, ContentDashBoard, DashBoardMenu } from "./style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartFlatbedSuitcase,
  faHeart,
  faUser,
  faLock,
  faHouse,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Account({ name }) {
  return (
    <AccountSection>
      <h3>My account</h3>
      <div>
        <DashBoardMenu>
          <p>Wellcome, {name}</p>
          <ul>
            <li>
              <Link to="#">
                <FontAwesomeIcon icon={faCartFlatbedSuitcase} />
                Orders
              </Link>
            </li>

            <li>
              <Link to="#">
                <FontAwesomeIcon icon={faHeart} />
                Favorites
              </Link>
            </li>
            <li>
              <Link to="#">
                <FontAwesomeIcon icon={faUser} />
                My account
              </Link>
            </li>
            <li>
              <Link to="#">
                <FontAwesomeIcon icon={faHouse} />
                Address
              </Link>
            </li>
            <li>
              <Link to="#">
                <FontAwesomeIcon icon={faLock} />
                Change password
              </Link>
            </li>
            <li>
              <Link to="#">
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                Sign out
              </Link>
            </li>
          </ul>
        </DashBoardMenu>

        <ContentDashBoard>
          <h3>Content here</h3>
        </ContentDashBoard>
      </div>
    </AccountSection>
  );
}
