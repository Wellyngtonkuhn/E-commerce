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

  .loadingContent {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;

    .loading {
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
      width: 100%;
      height: 4rem;
    }

    div:nth-child(2) {
      width: 100%;
      height: 2rem;
    }

    div:nth-child(3) {
      width: 100%;
      height: 2rem;
    }
    div:nth-child(4) {
      width: 0;
      height: 0;
    }
  }

  .loadingSvg{
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100px;
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

    .loadingContent {
      div:nth-child(1) {
        width: 20%;
        height: 4rem;
      }

      div:nth-child(2) {
        width: 30%;
        height: 2rem;
      }

      div:nth-child(3) {
        width: 30%;
        height: 2rem;
      }
      div:nth-child(4) {
        width: 10%;
        height: 2rem;
      }
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
