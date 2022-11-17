import { AsideContent, AsideSection } from "./style";

export default function Aside() {
  return (
    <AsideSection>
      <AsideContent>
        <div>
          <h3>Marcas</h3>
          <div className="checkbox">
            <label>
              <input type="checkbox" />
              RayBan
            </label>
          </div>

          <div className="checkbox">
            <label>
              <input type="checkbox" />
              RayBan
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" />
              RayBan
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" />
              RayBan
            </label>
          </div>
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
