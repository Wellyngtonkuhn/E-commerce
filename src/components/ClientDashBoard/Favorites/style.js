import styled from "styled-components";

export const Favorite = styled.section`
  width: 100%;

  tr {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4rem;
    margin-top: 1rem;

    td {
      font-size: 1rem;
      font-weight: 500;
      line-height: 22px;
    }
  }

  .removeTitle {
    display: none;
  }

  @media screen and (min-width: 425px) {
    tr {
      justify-content: space-around;
    }

    tr:first-child {
      margin-left: 1rem;
    }
  }

  @media screen and (min-width: 768px) {
    flex-basis: 80%;
    padding-left: 2rem;

    .removeTitle {
      display: block;
    }
    tr {
      justify-content: space-between;
    }
  }
`;

export const FavoriteContent = styled.div`
  width: 100%;

  border: 1px solid #f2ebe5;
  padding: 1rem;
  margin-top: 1rem;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;

    list-style: none;
  }

  img {
    width: 55px;
  }

  p {
    text-align: center;
  }

  .removeFavorite {
    font-size: 1rem;
    color: ${({ theme }) => theme.color.primaryColor};
    border: 1px solid ${({ theme }) => theme.color.primaryColor};
    padding: 0.1rem 0.3rem;
    text-align: center;
    transition: all ease 0.3s;
  }

  .removeFavorite:hover {
    background-color: ${({ theme }) => theme.color.primaryColor};
    color: #fff;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    ul {
      justify-content: space-between;

      li:nth-child(2) {
        margin-left: -4rem;
      }

      li:nth-child(3) {
        margin-left: -4rem;
      }
    }
  }
`;
