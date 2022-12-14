import styled from "styled-components";

export const Favorite = styled.section`
  width: 100%;
  padding-top: 3rem;

  .headTitles {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4rem;
    margin-top: 1rem;

    p {
      font-size: 1rem;
      font-weight: 500;
      line-height: 22px;
    }
  }

  .removeTitle {
    display: none;
  }

  @media screen and (min-width: 425px) {
    .headTitles {
      justify-content: space-around;
    }

    p:first-child {
      margin-left: 1rem;
    }
  }

  @media screen and (min-width: 768px) {
    flex-basis: 80%;
    padding-left: 2rem;
    padding-top: 0;

    .removeTitle {
      display: block;
      margin-right: 1rem;
    }
    .headTitles {
      justify-content: space-between;
    }
  }
`;

export const FavoriteContent = styled.div`
  width: 100%;
  border: 1px solid #f2ebe5;
  padding: 1rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;

  .firstColumn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: unset;

    img {
      width: 100px;
    }

    .productName {
      width: 7ch;
    }

    p {
      text-align: center;
    }
  }

  .secondColumn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    a,
    button {
      font-size: 1rem;
      color: ${({ theme }) => theme.color.primaryColor};
      border: 1px solid ${({ theme }) => theme.color.primaryColor};
      padding: 0.2rem 0.5rem;
      text-align: center;
      transition: all ease 0.3s;
    }

    a,
    button:hover {
      background-color: ${({ theme }) => theme.color.primaryColor};
      color: #fff;
      cursor: pointer;
    }
    button {
      background-color: transparent;
      padding: 0.2rem 0.55rem;
    }
  }

  @media screen and (min-width: 425px) {
    .firstColumn .productName {
      width: 45%;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 15%;

    .firstColumn .productName {
      width: 40%;
    }

    .secondColumn {
      flex-direction: column;
    }
  }

  @media screen and (min-width: 1024px) {
    gap: 25%;
    .firstColumn {
      justify-content: space-between;
    }
  }
`;
