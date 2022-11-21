import { Link } from "react-router-dom";

import { Input, FormSection, LoginRegisterSection } from "./style";

export default function Login({ title, showSignIn, showRegister }) {
  return (
    <LoginRegisterSection>
      {showSignIn && (
        <FormSection>
          <form>
            <h3>{title}</h3>
            <Input type="text" placeholder="email" />
            <Input type="text" placeholder="password" />
            <div>
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <Link to="#">Forgot password?</Link>
            </div>
            <button>Sign in</button>
          </form>
        </FormSection>
      )}

      {showRegister && (
        <FormSection>
          <form>
            <h3>Register</h3>
            <Input type="text" placeholder="name" />
            <Input type="text" placeholder="email" />
            <Input type="text" placeholder="password" />
            <button>Create account</button>
          </form>
        </FormSection>
      )}
    </LoginRegisterSection>
  );
}
