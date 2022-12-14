import { faShop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { GoToShoppingSection } from "./style";

export default function GoToShopping() {
  return (
    <GoToShoppingSection>
      <Link to="/shop">
        <FontAwesomeIcon icon={faShop} />
        Go to Shopping
      </Link>
    </GoToShoppingSection>
  );
}
