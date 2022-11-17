import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { MainShop, Content } from "./style";
import { Container } from "../../styles/GlobalStyles";

import Aside from "../../components/shopPage/Aside";
import Products from "../../components/shopPage/Products";


export default function Shop() {
  const { data, isLoading } = useQuery(
    ["data"],
    async () => {
      const request = await axios.get("http://localhost:3004/data");
      return request.data;
    },
    {
      staleTime: 10000 * 60,
    }
  );

  return (
    <MainShop>
      <Container>
        <Content>
          <Aside />
          <Products />
        </Content>
      </Container>
    </MainShop>
  );
}
