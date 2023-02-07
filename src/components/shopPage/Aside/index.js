
import { AsideContent, AsideSection } from "./style";

export default function Aside({ brands, filter, handleToogleCheckbox, setFilterByPrice }) {

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

        <form>
          <h3>Preço</h3>
          <div className="checkbox">
            <label>
              <input 
                type="radio" 
                name="price" 
                value= 'menorPreco' 
                onChange={(e) => setFilterByPrice(e.target.value)} 
              />
              Menor preço
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input 
                type="radio" 
                name="price"
                value='mariorPreco' 
                onChange={(e) => setFilterByPrice(e.target.value)} 
              />
              Maior preço
            </label>
          </div>
        </form>
      </AsideContent>
    </AsideSection>
  );
}
