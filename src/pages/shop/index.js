import { useState } from "react";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { MainShop, Content, MobileFilter } from "./style";
import { Container } from "../../styles/GlobalStyles";

import Aside from "../../components/shopPage/Aside";
import Products from "../../components/shopPage/Products";

export default function Shop() {
  const [brands, setBrands] = useState([
    { name: "Persol", checked: false },
    { name: "RayBan", checked: false },
    { name: "Gucci", checked: false },
    { name: "Carrera", checked: false },
  ]);

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

  const handleFilterBrands = (item) => {
    const newBrands = brands.map((brand) => {
      if (brand?.name === item?.name) {
        return { ...brand, name: item.name, checked: !item.checked };
      } else {
        return brand;
      }
    });

    setBrands(newBrands);
  };

  return (
    <MainShop>
      <Container>
        <Content>
          <MobileFilter>
            <button>Filters</button>
          </MobileFilter>
          <Aside brands={brands} handleFilterBrands={handleFilterBrands} />
          <Products brands={brands} data={data} isLoading={isLoading} />
        </Content>
      </Container>
    </MainShop>
  );
}
