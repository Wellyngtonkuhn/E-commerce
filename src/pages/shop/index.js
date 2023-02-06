import { useState } from "react";

import { MainShop, Content, MobileFilter } from "./style";
import { Container } from "../../styles/GlobalStyles";

import Aside from "../../components/shopPage/Aside";
import Products from "../../components/shopPage/Products";
import RenderOnTop from "../../components/RenderOnTop";

export default function Shop() {
  const [brands] = useState([
    { name: "Persol", id: 1 },
    { name: "RayBan", id: 2 },
    { name: "Gucci", id: 3 },
    { name: "Carrera", id: 4 },
  ]);
  const [filter, setFilter] = useState([]);
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const handleToogleCheckbox = (name) => {
    const currName = filter?.find((e) => e === name);
    let newFilter = [...filter];

    if (currName === undefined) {
      newFilter.push(name);
    } else {
      newFilter = newFilter.filter((item) => item !== currName);
    }
    setFilter(newFilter);
  };
  console.log(showMobileFilter);
  return (
    <MainShop>
      <Container>
        <Content>
          <MobileFilter>
            <button onClick={() => setShowMobileFilter(!showMobileFilter)}>
             Filtros
            </button>
            {showMobileFilter && (
              <div className="mobileFilter">
                <h3>Marcas</h3>
                {brands.map((item) => {
                  return (
                    <label key={item.id}>
                      <input
                        type="checkbox"
                        onChange={() => handleToogleCheckbox(item?.name)}
                        checked={
                          filter?.find((e) => e === item?.name) ? true : false
                        }
                      />
                      {item.name}
                    </label>
                  );
                })}
              </div>
            )}
          </MobileFilter>
          <Aside
            brands={brands}
            filter={filter}
            handleToogleCheckbox={handleToogleCheckbox}
          />
          <Products filter={filter} />
        </Content>
      </Container>
      <RenderOnTop />
    </MainShop>
  );
}
