import styled from "styled-components";

export const Order = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 3rem;

  @media screen and (min-width: 768px) {
    flex-basis: 80%;
    padding-left: 2rem;
    padding-top: 0;
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

      h4{
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
        h3{
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
    gap: .5rem;
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
      .secondRow{
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
