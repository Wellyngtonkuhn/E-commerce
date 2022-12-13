import styled from "styled-components";

export const Favorite = styled.section`
  width: 100%;
  padding-top: 3rem;

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
    padding-top: 0;

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
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    list-style: none;
  }

  img {
    width: 100px;
  }

  .productName {
    width: 9ch;
  }

  p {
    text-align: center;
  }

  .actions {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;

    a {
      font-size: 1rem;
      color: ${({ theme }) => theme.color.primaryColor};
      border: 1px solid ${({ theme }) => theme.color.primaryColor};
      padding: 0.2rem 0.5rem;
      text-align: center;
      transition: all ease 0.3s;
    }

    .a:hover {
      background-color: ${({ theme }) => theme.color.primaryColor};
      color: #fff;
      cursor: pointer;
    }
  }

  @media screen and (min-width: 375px) {
    ul {
      gap: 1rem;
    }

    .actions {
      margin-top: unset;
    }
  }

  @media screen and (min-width: 375px) {
    ul {
      gap: 3rem;
    }

    .actions {
      margin-top: -3rem;
    }
  }

  @media screen and (min-width: 768px) {
    ul {
      justify-content: space-between;
      gap: unset;
    }

    li:nth-child(2) {
      margin-left: -2rem;
    }

    .actions {
      flex-direction: column;
      margin-top: unset;
    }
  }
`;
