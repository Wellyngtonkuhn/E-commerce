import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const HeaderContent = styled.div`
  padding: 3rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Menu = styled.nav`
  ul {
    display: none;

    @media screen and (min-width: 426px) {
      display: flex;
      gap: 1.688rem;
      list-style: none;
    }
  }

  a {
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 24px;
    text-transform: uppercase;
    color: #212121;
    transition: all ease 0.3s;
  }

  a:hover {
    border: none;
    border-bottom: 1px solid #fff;
  }
`;

export const MenuMobile = styled.nav`
  button {
    background-color: transparent;
    border: unset;
  }

  img {
    width: 35px;
  }

  @media screen and (min-width: 426px) {
    display: none;
  }
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 1rem;
`;
