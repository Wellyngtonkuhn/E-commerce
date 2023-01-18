import styled from "styled-components";

export const SingleProductSection = styled.section`
  width: 100%;
  margin-top: 8.7rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  .loadingSvg {
    position: fixed;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FirstColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
  }

  .loading {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    div {
      width: 300px;
      height: 30%;
      margin-top: 25rem;
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
  }


  @media screen and (min-width: 768px) {
    div {
      position: fixed;
    }
  }
`;

export const SecondColumn = styled.div`
  width: 100%;
  padding: 1rem;

  .productDetails {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }

  h3 {
    font-size: 1.7rem;
    font-weight: 700;
    line-height: 40px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.color.primaryColor};
    padding: 0;
  }

  h4 {
    font-size: 1rem;
    font-weight: 500;
    line-height: 32px;
    color: #8f8f8f;
  }

  h5 {
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 32px;
    color: #2d2d2d;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    line-height: 24px;
    color: #2d2d2d;
    text-align: justify;
  }

  hr {
    margin: 1rem 0;
  }

  .lastUnits {
    font-weight: 700;
    color: red;
  }

  .productPrice {
    font-size: 1.7rem;
  }

  .pruductQTD {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 0;

    p {
      font-size: 1.2rem;
      padding-bottom: 0.5rem;
    }

    div:nth-child(1) {
      width: 45%;
      select {
        width: 100%;
        padding: 0.42rem 0;
        text-align: center;
        border: 1px solid ${({ theme }) => theme.color.primaryColor};

        :focus {
          outline: none;
        }
      }
    }

    div:nth-child(2) {
      width: 45%;
      div {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.3rem 0;
        border: 1px solid ${({ theme }) => theme.color.primaryColor};

        button {
          width: 100%;
          font-size: 1.2rem;
          font-weight: 500;
          border: none;
          background-color: transparent;
        }

        button:nth-child(1) {
          border-right: 1px solid ${({ theme }) => theme.color.primaryColor};
          cursor: pointer;
        }

        button:nth-child(3) {
          border-left: 1px solid ${({ theme }) => theme.color.primaryColor};
          cursor: pointer;
        }

        p {
          padding: 0 0.5rem;
        }
      }
    }
  }

  .productBuyButton {
    width: 100%;
    display: flex;
    text-align: center;

    button {
      width: 100%;
      font-size: 1rem;
      font-weight: 700;
      text-transform: uppercase;
      color: ${({ theme }) => theme.color.primaryColor};
      border: 1px solid ${({ theme }) => theme.color.primaryColor};
      background-color: transparent;
      padding: 0.7rem 0;
      transition: all ease 0.3s;
    }

    button:hover {
      background-color: ${({ theme }) => theme.color.primaryColor};
      color: #fff;
      cursor: pointer;
    }
  }

  @media screen and (min-width: 425px) {
    .productDetails {
      h3 {
        font-size: 1.8rem;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .pruductQTD {
      div:nth-child(1) {
        width: 40%;
      }
      div:nth-child(2) {
        width: 40%;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    .pruductQTD {
      div:nth-child(1) {
        width: 35%;
      }
      div:nth-child(2) {
        width: 35%;
      }
    }
  }
`;
