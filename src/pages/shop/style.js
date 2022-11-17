import styled from "styled-components";

export const MainShop = styled.main`
  width: 100%;
  margin-top: 11rem;
  margin-bottom: 3rem;
  padding: 0 1rem;
`;

export const Content = styled.section`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (min-width: 674px) {
    flex-direction: row;
  }
`;

export const MobileFilter = styled.div`
  display: flex;
  justify-content: end;

  button {
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.primaryColor};
    border: 1px solid ${({ theme }) => theme.color.primaryColor};
    background-color: transparent;
    padding: 0.3rem 1.5rem;
    transition: all ease 0.3s;
  }

  button:hover {
    background-color: ${({ theme }) => theme.color.primaryColor};
    color: #fff;
  }

  @media screen and (min-width: 674px) {
    display: none;
  }
`;
