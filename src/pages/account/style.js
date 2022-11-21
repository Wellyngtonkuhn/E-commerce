import styled from "styled-components";

export const AccountSection = styled.section`
  width: 100%;
  min-height: 60vh;
  margin-top: 12rem;

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
`;
