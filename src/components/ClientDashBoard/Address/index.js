import { AddressSection, Content, Input } from "./style";

export default function Address() {
  return (
    <AddressSection>
      <h3>Endereço</h3>

      <Content>
        <form>
          <label>
            CEP
            <Input type="text" placeholder="00000-00" />
          </label>
          <label>
            Destinatário
            <Input type="text" placeholder="nome de quem vai receber" />
          </label>
          <label>
            Rua
            <Input type="text" placeholder="rua exemplo" />
          </label>
          <label>
            Número
            <Input type="text" placeholder="000" />
          </label>
          <label>
            Complemento
            <Input type="text" placeholder="ex: apto-000 | casa-000" />
          </label>
          <label>
            Bairro
            <Input type="text" placeholder="centro" />
          </label>
          <label>
            Cidade
            <Input type="text" placeholder="cidade" />
          </label>
          <label>
            Estado
            <Input type="text" placeholder="estado" />
          </label>

          <label>
            Referência
            <Input type="text" placeholder="locais próximos" />
          </label>
          <button type="submit">Salvar</button>
        </form>
      </Content>
    </AddressSection>
  );
}
