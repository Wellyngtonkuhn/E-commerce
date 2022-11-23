import { ChangePasswordSection, Content, Input } from "./style";

export default function ChangePassword() {
  return (
    <ChangePasswordSection>
      <h3>Mudar senha</h3>

      <Content>
        <form>
          <label>
            Nova senha
            <Input type="text" placeholder="digite a nova senha" />
          </label>
          <label>
            Repita a senha
            <Input type="text" placeholder="confirme a nova senha" />
          </label>
          <button type="submit">Salvar</button>
        </form>
      </Content>
    </ChangePasswordSection>
  );
}
