import { useSelector, useDispatch } from "react-redux";

import { AccountSection } from "./style";
import { Container } from "../../styles/GlobalStyles";

import Login from "../../components/login";
import ClientDashBoard from "../../components/ClientDashBoard";
import RenderOnTop from "../../components/RenderOnTop/";
import { addUserClick } from "../../redux/userClick";

export default function AccountPage() {
  const { token } = useSelector(state => state.user)
  const showMenuMobile = useSelector(state => state.showMobile.show)
  const dispatch = useDispatch()

  return (
    <AccountSection onClick={e => showMenuMobile && dispatch(addUserClick(e.isTrusted))}>
      <Container>
        {!token ? (
          <Login />
        ) : (
          <ClientDashBoard />
        )}
      </Container>
      <RenderOnTop />
    </AccountSection>
  );
}
