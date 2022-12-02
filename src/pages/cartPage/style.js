import styled from "styled-components";

export const CartSection = styled.section`
  width: 100%;
  margin-top: 10rem;

  .cartTitle {
    font-size: 1.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.color.primaryColor};
    padding: 1rem 0;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 1rem;
  }
`;

export const FirstColumn = styled.div`
  width: 100%;

  li {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.color.primaryColor};
  }

  .product {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    p {
      font-size: 0.8rem;
      padding-bottom: 0.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.4rem;

      img {
        width: 75px;
      }

      h3 {
        font-size: 1rem;
        width: 7ch;
        font-weight: 500;
      }
    }
    .removeButton {
      color: red;
      font-size: 0.9rem;
      font-weight: 700;
    }
  }

  .price {
    display: none;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .quantity {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    margin-top: 0.5rem;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.4rem 0.9rem;
      border: 1px solid ${({ theme }) => theme.color.primaryColor};
      border-radius: 25px;
      button {
        font-size: 1.2rem;
      }

      p:nth-child(2) {
        border-left: 1px solid ${({ theme }) => theme.color.primaryColor};
        border-right: 1px solid ${({ theme }) => theme.color.primaryColor};
        padding: 0 0.3rem;
      }
    }
  }

  h4 {
    font-size: 1rem;
    font-weight: 500;
  }

  .total {
    display: none;
  }

  @media screen and (min-width: 425px) {
    li {
      padding: 0 0.5rem;
    }

    .total {
      display: flex;
      flex-direction: column;
      margin: 0.5rem 0;
      gap: 0.9rem;
    }
  }

  @media screen and (min-width: 768px) {
    width: 75%;
    .price {
      display: flex;
      flex-direction: column;
      gap: 0.9rem;
      margin: 0.5rem 0;
    }
    img {
      width: 100px;
    }
  }

  @media screen and (min-width: 1024px) {
    .product div img {
      width: 120px;
    }
  }
`;

export const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 1rem 0;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .finalTotal {
    font-weight: 700;
  }

  button {
    width: 100%;
    font-size: .95rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.primaryColor};
    border: 1px solid ${({ theme }) => theme.color.primaryColor};
    background-color: transparent;
    padding: 0.6rem 0;
    transition: all ease 0.3s;
  }

  button:hover {
    background-color: ${({ theme }) => theme.color.primaryColor};
    color: #fff;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    width: 25%;
  }

  @media screen and (min-width: 1024px) {
  button{
    font-size: 1rem;
    padding: 0.7rem 0;
  }
  }
`;

export const ShopNow = styled.div`
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
