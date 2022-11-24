import styled from "styled-components";

export const MenuContentMobile = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  left: 0;
  top: 13rem;
  padding-top: 30%;

  background-color: ${({ theme }) => theme.backgroundColor};

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  a {
    font-size: 1rem;
    color: ${({ theme }) => theme.color.primaryColor};
    border: 1px solid ${({ theme }) => theme.color.primaryColor};
    padding: 0.6rem 1.5rem;
    transition: all ease 0.3s;

    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      gap: 1rem;
    }
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MenuContent = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-basis: 20%;
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-left: 1rem;
    }

    a {
      font-size: 1rem;
      color: ${({ theme }) => theme.color.primaryColor};
      border: 1px solid ${({ theme }) => theme.color.primaryColor};
      padding: 0.6rem 1.5rem;
      transition: all ease 0.3s;

      display: flex;
      justify-content: space-between;
      align-items: center;

      div {
        display: flex;
        gap: 1rem;
      }
    }

    a:hover {
      background-color: ${({ theme }) => theme.color.primaryColor};
      color: #fff;
    }
  }
`;
