import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { AccountSection, Content, Header } from "./style";
import { Container } from "../../styles/GlobalStyles";

import { useQuery } from "@tanstack/react-query";
import { api } from "../../axiosConfig/api";

import RenderOnTop from "../../components/RenderOnTop/";
import { addUserClick } from "../../redux/userClick";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import ClientNavBar from "../../components/ClientDashBoard/ClientNavBar";

export default function AccountPage() {
  const [showMenuMobileDashBoard, setShowMenuMobileDashBoard] = useState(false)
  const showMenuMobile = useSelector((state) => state.showMobile.show);
  const { user, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // const { data } = useQuery(["userData"], async () => {
  //   const request = await api.get(`/user/${user?.id}`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   return request.data;
  // });

  return (
    <AccountSection
      onClick={(e) => showMenuMobile && dispatch(addUserClick(e.isTrusted))}
    >
      <Container>
        <Header>
          <div>
            <h3>Minha conta</h3>
            <p>
              <span>Bem vindo </span>
              {user?.name}
            </p>
          </div>
          <button onClick={() => setShowMenuMobileDashBoard(!showMenuMobileDashBoard) }>
            {!showMenuMobileDashBoard ? (
              <FontAwesomeIcon icon={faBars} size={"lg"} />
            ) : (
              <FontAwesomeIcon icon={faX} size={"lg"} />
            )}
          </button>
          </Header>

        <Content>
          <ClientNavBar
            showMenuMobileDashBoard={showMenuMobileDashBoard}
            setShowMenuMobileDashBoard={setShowMenuMobileDashBoard}
          />
          <Outlet />
        </Content>
        <RenderOnTop />
      </Container>
      <RenderOnTop />
    </AccountSection>
  );
}
