import styled from "styled-components";

export const ChangePasswordSection = styled.section`
  width: 100%;
  padding-top: 3rem;

  @media screen and (min-width: 768px) {
    flex-basis: 80%;
    padding-left: 2rem;
    padding-top: 0;
  }
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 1rem;

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    font-weight: 500;
    line-height: 24px;
    color: #212121;

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
  }

  button {
    font-size: 1rem;
    color: ${({ theme }) => theme.color.primaryColor};
    border: 1px solid ${({ theme }) => theme.color.primaryColor};
    background-color: transparent;
    padding: 0.4rem 1.5rem;
    margin-top: 0.5rem;
    transition: all ease 0.3s;
    cursor: pointer;
  }

  button:hover {
    background-color: ${({ theme }) => theme.color.primaryColor};
    color: #fff;
  }

  .errorMessageform {
    font-weight: ${({ theme }) => theme.errorMessage.fontWeight};
    color: ${({ theme }) => theme.errorMessage.color};
  }

  .loading{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
  }

  @media screen and (min-width: 768px) {
    width: 40%;
    margin: auto;
    margin-top: 1rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: unset;
  border-bottom: 1px solid ${({ theme }) => theme.color.primaryColor};
  background-color: transparent;
  padding: 0.7rem 0.7rem 0.1rem 0.7rem;
  margin-bottom: 0.5rem;

  font-size: 1rem;

  :focus {
    outline: none;
  }
`;
