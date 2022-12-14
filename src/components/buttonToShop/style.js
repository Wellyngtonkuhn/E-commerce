import styled from "styled-components";

export const GoToShoppingSection = styled.section`
  width: 100%;
  min-height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    font-size: 1.3rem;
    font-family: 700;
    border-radius: 15px;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    background-color: ${({ theme }) => theme.color.primaryColor};
    color: #fff;
    padding: 0.7rem 3rem;
  }

  @media screen and (min-width: 1024px) {
    a {
      transition: all ease 0.3s;
    }
    a:hover {
      border: 1px solid ${({ theme }) => theme.color.primaryColor};
      color: ${({ theme }) => theme.color.primaryColor};
      background-color: #fff;
    }
  }
`;
