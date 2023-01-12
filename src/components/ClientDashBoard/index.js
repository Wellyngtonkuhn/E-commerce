import { useState } from "react";
import { useSelector } from "react-redux";

import { useQuery } from "@tanstack/react-query";
import { api } from "../../axiosConfig/api";

import { AccountSection, Content } from "./style";

import ClientNavBar from "./ClientNavBar";
import Orders from "./Orders";
import Favorites from "./Favorites";
import MyAccount from "./MyAccount";
import Address from "./Address";
import ChangePassword from "./ChangePassword";
import RenderOnTop from "../RenderOnTop";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

export default function ClientDashBoard() {
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const [showMenuClientContent, setshowMenuClientContent] = useState("orders");

  const { user, token } = useSelector(state => state.user)

  const {data} = useQuery(['userData'], async () => {
    const request = await api.get(`/user/${user?.id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return request.data
})

  const handleSwitchContent = (showMenuClientContent) => {
    switch (showMenuClientContent) {
      case "orders":
        return <Orders />;
      case "favorites":
        return <Favorites />;
      case "myAccount":
        return <MyAccount data={data} user={user} token={token} />;
      case "address":
        return <Address data={data} user={user} token={token} />;
      case "changePassword":
        return <ChangePassword user={user} token={token} />;
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
            {user?.name}
          </p>
        </div>
        <button onClick={() => setShowMenuMobile(!showMenuMobile)}>
          {!showMenuMobile ? (
            <FontAwesomeIcon icon={faBars} size={"lg"} />
          ) : (
            <FontAwesomeIcon icon={faX} size={"lg"} />
          )}
        </button>
      </div>
      <Content>
        <ClientNavBar
          showMenuMobile={showMenuMobile}
          setShowMenuMobile={setShowMenuMobile}
          setshowMenuClientContent={setshowMenuClientContent}
        />

        {handleSwitchContent(showMenuClientContent)}
      </Content>
      <RenderOnTop />
    </AccountSection>
  );
}
