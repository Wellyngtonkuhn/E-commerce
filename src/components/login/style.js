import styled from "styled-components";

export const LoginRegisterSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;

  .buttonDivLoginRegister {
    width: 100%;
    height: 100px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    button {
      font-size: 1rem;
      color: ${({ theme }) => theme.color.primaryColor};
      border: 1px solid ${({ theme }) => theme.color.primaryColor};
      background-color: transparent;
      padding: 0.3rem 1.5rem;
      transition: all ease 0.3s;
      cursor: pointer;
    }

    button:hover {
      background-color: ${({ theme }) => theme.color.primaryColor};
      color: #fff;
    }
  }

  .errorMessageform {
    font-weight: ${({ theme }) => theme.errorMessage.fontWeight};
    color: ${({ theme }) => theme.errorMessage.color};
  }

  .loading{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
  }
`;

export const FormSection = styled.div`
  width: 90%;
  padding: 0 2rem 2rem 2rem;
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
      cursor: pointer;
    }

    button {
      font-size: 1rem;
      color: ${({ theme }) => theme.color.primaryColor};
      border: 1px solid ${({ theme }) => theme.color.primaryColor};
      background-color: transparent;
      padding: 0.4rem 1.5rem;
      transition: all ease 0.3s;
      cursor: pointer;
    }

    button:hover {
      background-color: ${({ theme }) => theme.color.primaryColor};
      color: #fff;
    }
  }

  .inputPassword{
    position: relative;

    input{
      width: 100%;
    }

    svg{
      position: absolute;
      right: 5%;
      cursor: pointer;
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
