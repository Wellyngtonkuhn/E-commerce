import styled from "styled-components";

export const MenuContent = styled.div`
  display: none;
  flex-direction: column;
  /*
  justify-content: center;
  position: fixed;
  top: 8rem;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 0 5rem;
  background-color: ${({ theme }) => theme.backgroundColor};
  */

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

  @media screen and (min-width: 769px) {
    display: flex;
    flex-basis: 20%;
    position: unset;
  }
`;
