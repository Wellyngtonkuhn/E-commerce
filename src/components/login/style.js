import styled from "styled-components";

export const LoginRegisterSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormSection = styled.div`
  width: 90%;
  padding: 2rem;
  display: flex;
  align-items: center;

  h3 {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 2px;
    line-height: 24px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.primaryColor};
    font-family: "Gotham";
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      a {
        font-size: 0.8rem;
        font-weight: 700;
        line-height: 24px;
        color: #212121;
      }
    }

    label {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      font-size: 0.8rem;
      font-weight: 700;
      line-height: 24px;
      color: #212121;
    }

    button {
      font-size: 1rem;
      color: ${({ theme }) => theme.color.primaryColor};
      border: 1px solid ${({ theme }) => theme.color.primaryColor};
      background-color: transparent;
      padding: 0.4rem 1.5rem;
      transition: all ease 0.3s;
    }

    button:hover {
      background-color: ${({ theme }) => theme.color.primaryColor};
      color: #fff;
    }
  }

  @media screen and (min-width: 426px) {
    width: 75%;
  }

  @media screen and (min-width: 768px) {
    width: 50%;
  }

  @media screen and (min-width: 1024px) {
    width: 35%;
  }
`;

export const Input = styled.input`
  border: unset;
  border-bottom: 1px solid ${({ theme }) => theme.color.primaryColor};
  background-color: transparent;
  padding: 0.7rem;

  :focus {
    outline: none;
  }
`;
