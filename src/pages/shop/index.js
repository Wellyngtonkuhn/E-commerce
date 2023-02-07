import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../axiosConfig/api";
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
  const [ filterByPrice, setFilterByPrice ] = useState('')

  const { data, isLoading, isError } = useQuery(["data"], async () => {
    const request = await api.get('/products');
    return request.data;
  },
  {
    staleTime: 10000 * 60,
  }
);


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

  // Filtra os produtos
  const handleFilter = () => {
    const newDataFiltered = data?.filter(item =>{
      if(filter.length === 0){
        return data
      } else{
      return filter.includes(item.marca)
      }
    })
    return newDataFiltered
  }

useEffect(() => {
  if(isError) alert('Atualize a página para carregar os produtos')
}, [isError])

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
                <div>
                  <h3>Marcas</h3>
                  <button onClick={() => setShowMobileFilter(false)}>X</button>
                </div>
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
            setFilterByPrice={setFilterByPrice}
          />
          <Products data={data} isLoading={isLoading} handleFilter={handleFilter}/>
        </Content>
      </Container>
      <RenderOnTop />
    </MainShop>
  );
}
