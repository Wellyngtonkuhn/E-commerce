import { AsideContent, AsideSection } from "./style";

export default function Aside({ brands, setFilter, filter }) {
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

  return (
    <AsideSection>
      <AsideContent>
        <div>
          <h3>Marcas</h3>
          {brands &&
            brands?.map((brand) => (
              <div className="checkbox" key={brand?.name}>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => handleToogleCheckbox(brand?.name)}
                    checked={filter?.find((e) => e === brand?.name) ? true : false}
                  />
                  {brand?.name}
                </label>
              </div>
            ))}
        </div>

        <div>
          <h3>Tamanho</h3>
          <div className="checkbox">
            <label>
              <input type="checkbox" />
              Xl 544
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" />
              MD 74
            </label>
          </div>
        </div>

        <div>
          <h3>Preço</h3>
          <div className="checkbox">
            <label>
              <input type="checkbox" />
              Até R$ 350
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" />
              Até R$ 500
            </label>
          </div>
        </div>
      </AsideContent>
    </AsideSection>
  );
}
