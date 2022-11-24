import { useState } from "react";
import { AccountSection, Content } from "./style";

import ClientNavBar from "./ClientNavBar";
import Orders from "./Orders";
import Favorites from "./Favorites";
import MyAccount from "./MyAccount";
import Address from "./Address";
import ChangePassword from "./ChangePassword";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function ClientDashBoard({ data, handleToken }) {
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const [showMenuClientContent, setshowMenuClientContent] = useState("orders");

  const handleSwitchContent = (showMenuClientContent) => {
    switch (showMenuClientContent) {
      case "orders":
        return <Orders />;
      case "favorites":
        return <Favorites />;
      case "myAccount":
        return <MyAccount />;
      case "address":
        return <Address />;
      case "changePassword":
        return <ChangePassword />;
      default:
        return null;
    }
  };

  return (
    <AccountSection>
      <div className="clienteMenu">
        <div>
          <h3>Minha conta</h3>
          <p>
            <span>Bem vindo </span>
            {data.name ? data.name : data.email}
          </p>
        </div>
        <button onClick={() => setShowMenuMobile(true)}>
          <FontAwesomeIcon icon={faBars} size={"lg"} />
        </button>
      </div>
      <Content>
        <ClientNavBar
          showMenuMobile={showMenuMobile}
          setShowMenuMobile={setShowMenuMobile}
          handleToken={handleToken}
          setshowMenuClientContent={setshowMenuClientContent}
        />

        {handleSwitchContent(showMenuClientContent)}
      </Content>
    </AccountSection>
  );
}
