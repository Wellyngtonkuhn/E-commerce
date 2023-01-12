import styled from "styled-components";

export const Ul = styled.ul`

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
        width: 10ch;
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
    width: 100%;
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
    .product div {
      img{
        width: 120px;
      }
      h3{
        width: 100%;
      }
    }
  }
`;
