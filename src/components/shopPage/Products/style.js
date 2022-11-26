import styled from "styled-components";

export const ProductsSection = styled.section`
  flex-basis: 100%;
  min-height: 15rem;
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  list-style: none;

  li {
    text-align: center;
    margin-bottom: 1rem;
  }

  li img {
    width: 150px;
  }

  li h3 {
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 2px;
    line-height: 24px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.primaryColor};
    font-family: "Gotham";
    padding: 0;
    margin-top: -40px;
  }

  li p {
    font-size: 1rem;
    font-weight: 700;
    line-height: 24px;
    text-transform: uppercase;
    color: #212121;
    font-family: "Gotham";
    padding: 0.5rem 0 1rem 0;
  }

  li a {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.color.primaryColor};
    border: 1px solid ${({ theme }) => theme.color.primaryColor};
    padding: 0.3rem 1.5rem;
    transition: all ease 0.3s;
  }

  a:hover {
    background-color: ${({ theme }) => theme.color.primaryColor};
    color: #fff;
  }

  @media screen and (min-width: 552px) {
    flex-basis: 80%;
    gap: 3rem;

    li {
      margin-bottom: unset;
    }

    li img {
      width: 200px;
    }

    li h3 {
      font-size: 0.9rem;
    }
    li p {
      font-size: 1.1rem;
    }

    li a {
      font-size: 1rem;
      padding: 0.3rem 1.5rem;
    }
  }

  .loadingContent {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 425px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 1rem;
      padding: 0 1rem;
    }

    @media screen and (min-width: 1440px) {
      margin-top: 2rem;
    }
  }

  .loading {
    width: 40%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    div {
      width: 175px;
      height: 100%;
      background: rgb(200, 194, 194);
      background: linear-gradient(
        90deg,
        rgba(200, 194, 194, 0.5242471988795518) 6%,
        rgba(122, 120, 120, 0.4906337535014006) 49%,
        rgba(0, 0, 0, 0.165703781512605) 91%
      );
      background-size: 300% 300%;
      animation: colors 5s ease infinite;
    }

    @keyframes colors {
      0% {
        background-position: 0% 50%;
      }

      50% {
        background-position: 100% 50%;
      }

      100% {
        background-position: 0% 50%;
      }
    }

    div:nth-child(1) {
      height: 6rem;
    }

    div:nth-child(2) {
      width: 150px;
      height: 1rem;
    }

    div:nth-child(3) {
      width: 130px;
      height: 1rem;
    }

    div:nth-child(4) {
      width: 175px;
      height: 1rem;
    }

    @media screen and (min-width: 1024px) {
      width: 20%;
      justify-content: space-between;
    }
  }
`;
