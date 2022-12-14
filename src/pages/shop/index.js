import { useState } from "react";
import { api } from "../../axiosConfig/api";
import { useQuery } from "@tanstack/react-query";

import { MainShop, Content, MobileFilter } from "./style";
import { Container } from "../../styles/GlobalStyles";

import Aside from "../../components/shopPage/Aside";
import Products from "../../components/shopPage/Products";
import RenderOnTop from "../../components/RenderOnTop";


export default function Shop() {
  const [brands, setBrands] = useState([
    { name: "Persol", id: 1 },
    { name: "RayBan", id: 2 },
    { name: "Gucci", id: 3 },
    { name: "Carrera", id: 4 },
  ]);
  const [filter, setFilter] = useState([])

  const { data, isLoading } = useQuery(["data"],
    async () => {
      const request = await api.get('/products');
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
          <MobileFilter>
            <button>filtros</button>
          </MobileFilter>
          <Aside brands={brands} filter={filter} setFilter={setFilter} />
          <Products filter={filter} data={data} isLoading={isLoading} />
        </Content>
      </Container>
      <RenderOnTop />
    </MainShop>
  );
}
