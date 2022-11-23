import { useState } from "react";
import { AccountSection, Content } from "./style";

import ClientNavBar from "./ClientNavBar";
import Orders from "./Orders";
import Favorites from "./Favorites";
import MyAccount from "./MyAccount";
import Address from "./Address";
import ChangePassword from "./ChangePassword";

export default function ClientDashBoard({ data, handleToken }) {
  const [showMenuClientContent, setshowMenuClientContent] = useState("favorites");

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
      <h3>My account</h3>
      <p>
        <span>Wellcome </span>
        {data.name ? data.name : data.email}
      </p>
      <Content>
        <ClientNavBar
          handleToken={handleToken}
          setshowMenuClientContent={setshowMenuClientContent}
        />

        {handleSwitchContent(showMenuClientContent)}
      </Content>
    </AccountSection>
  );
}
