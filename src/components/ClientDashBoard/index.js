import { AccountSection, Content } from "./style";

import ClientNavBar from "./ClientNavBar";
import Orders from "./Orders";

export default function ClientDashBoard({ data, handleToken }) {
  return (
    <AccountSection>
      <h3>My account</h3>
      <p>
        <span>Wellcome </span>
        {data.name ? data.name : data.email}
      </p>
      <Content>
        <ClientNavBar handleToken={handleToken} />
        <Orders />
      </Content>
    </AccountSection>
  );
}
