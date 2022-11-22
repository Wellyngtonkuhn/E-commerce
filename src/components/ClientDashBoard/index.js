import { AccountSection, Content } from "./style";

import ClientNavBar from "./ClientNavBar";
import Orders from "./Orders";

export default function ClientDashBoard({ name }) {
  return (
    <AccountSection>
       <h3>My account</h3>
      <p>
        <spam>Wellcome </spam>
        {name}
      </p>
      <Content>
        <ClientNavBar />
        <Orders />
      </Content>
    </AccountSection>
  );
}
