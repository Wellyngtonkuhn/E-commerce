import { Link } from "react-router-dom";

import InputComponent from "../Input";

import { LoginForm, LoginSection, RegisterForm } from "./style";

export default function Login({ title }) {
  return (
    <LoginSection>
      <LoginForm>
        <form>
          <h3>{title}</h3>
          <InputComponent type="text" placeholder="email" />
          <InputComponent type="text" placeholder="password" />
          <div>
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <Link to="#">Forgot password?</Link>
          </div>
          <button>Sign in</button>
        </form>
      </LoginForm>

      <RegisterForm>
        <form>
          <h3>Register</h3>
          <input type="text" placeholder="name" />
          <input type="text" placeholder="email" />
          <input type="text" placeholder="password" />
          <button>Create account</button>
        </form>
      </RegisterForm>
    </LoginSection>
  );
}
