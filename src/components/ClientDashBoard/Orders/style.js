import styled from "styled-components";

export const Order = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 3rem;

  .loadingContent {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

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
      width: 45%;
      height: 4rem;
    }

    div:nth-child(2) {
      width: 45%;
      height: 0;
    }

    div:nth-child(3) {
      width: 45%;
      height: 1rem;
    }
    div:nth-child(4) {
      width: 25%;
      height: 4rem;
    }
    div:nth-child(5) {
      width: 45%;
      height: 4rem;
    }
  }

  @media screen and (min-width: 768px) {
    flex-basis: 80%;
    padding-left: 2rem;
    padding-top: 0;

    .loadingContent {
      div:nth-child(1) {
        width: 20%;
        height: 4rem;
      }

      div:nth-child(2) {
        width: 25%;
        height: 4rem;
      }

      div:nth-child(3) {
        width: 20%;
        height: 4rem;
      }
      div:nth-child(4) {
        width: 100%;
        height: 6rem;
        margin-top: 1rem;
      }
      div:nth-child(5) {
        width: 100%;
        height: 0;
      }
    }
  }
`;

export const OrderContent = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  border: 1px solid #f2ebe5;
  padding: 1rem;

  .firsRow {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .firstCollumn {
      width: 80%;

      h4 {
        font-size: 0.9rem;
        line-height: 22px;

        span {
          font-size: 0.8rem;
          font-weight: 500;
        }
      }

      @media screen and (min-width: 425px) {
        display: flex;
        flex-wrap: wrap;
      }

      @media screen and (min-width: 768px) {
        h3 {
          font-size: 1rem;
        }
      }
    }

    .secondColumn {
      width: 20%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    img {
      width: 130px;
      margin-right: 1rem;
    }

    a {
      font-size: 1rem;
      color: ${({ theme }) => theme.color.primaryColor};
      border: 1px solid ${({ theme }) => theme.color.primaryColor};
      width: 100%;
      min-height: 2rem;
      padding: 0.1rem 0;
      text-align: center;
      transition: all ease 0.3s;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    a:hover {
      background-color: ${({ theme }) => theme.color.primaryColor};
      color: #fff;
    }
  }

  .secondRow {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 0.5rem;
    min-height: 3rem;
    padding: 1rem;
    margin-top: 1rem;
    background-color: ${({ theme }) => theme.backgroundColor};

    div {
      display: flex;
      text-align: center;

      h4 {
        display: flex;
        flex-direction: column;
        justify-content: center;

        font-size: 0.9rem;
        line-height: 22px;

        span {
          font-size: 0.8rem;
          font-weight: 500;
        }
      }
    }
  }

  @media screen and (min-width: 425px) {
    .secondRow {
      gap: 2rem;
    }
  }

  .processing {
    color: #5fa948;
    font-weight: 700;
  }

  .delivered {
    color: green;
    font-weight: 700;
  }

  .atTheWay {
    color: #ffb515;
    font-weight: 700;
  }

  .cancelled {
    color: red;
    font-weight: 700;
  }

  .approved {
    color: green;
    font-weight: 700;
  }
`;
