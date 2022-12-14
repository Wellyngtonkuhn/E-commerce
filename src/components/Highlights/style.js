import styled from "styled-components";

export const HighlightsSection = styled.section`
  width: 100%;
  margin-bottom: 3rem;

  .title {
    font-size: 2rem;
    letter-spacing: 1px;
    line-height: 24px;
    text-transform: uppercase;
    color: #212121;
    font-weight: 300;
    text-align: center;
    padding: 4rem 0 2rem 0;

    span {
      font-weight: 700;
      font-size: 1.5rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  ul {
    width: 100%;
    list-style: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li {
    padding-bottom: 1rem;
  }

  img {
    width: 200px;
  }

  h3 {
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 2px;
    line-height: 24px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.primaryColor};
    font-family: "Gotham";
    padding: 0;
  }

  p {
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 24px;
    text-transform: uppercase;
    color: #212121;
    font-family: "Gotham";
    padding: 0.5rem 0 1rem 0;
  }

  .buttons{
    display: flex;
    align-items: center;
    justify-content: center;
    .btn-buy {
      font-size: 1rem;
      color: ${({ theme }) => theme.color.primaryColor};
      border: 1px solid ${({ theme }) => theme.color.primaryColor};
      padding: 0.3rem 1.5rem;
      transition: all ease 0.3s;
    }

    .btn-buy:hover {
      background-color: ${({ theme }) => theme.color.primaryColor};
      color: #fff;
    }
    button {
      background-color: transparent;
      cursor: pointer;
    }
  }

  @media screen and (min-width: 768px) {
    ul li img {
      height: 140px;
    }
  }

  @media screen and (min-width: 1024px) {
    ul li img {
      height: 130px;
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

  @media screen and (min-width: 425px) {
    padding: 0 1rem;

    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        width: 40%;
      }

      li img {
        width: 100%;
      }
    }
  }

  @media screen and (min-width: 768px) {
    ul li img {
      width: 200px;
    }
  }

  @media screen and (min-width: 1024px) {
    ul li {
      width: 30%;

      img {
        width: 200px;
      }
    }
  }

  @media screen and (min-width: 1285px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    .title {
      transform: rotate(-90deg);
      padding: 0;
      margin-left: -60px;
    }
    ul {
      width: 100%;
      justify-content: space-between;
    }

    ul li {
      width: 25%;

      img {
        width: 90%;
      }
    }
  }
`;
