import styled from "styled-components";

export const Order = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;

  @media screen and (min-width: 769px) {
    flex-basis: 80%;
    padding-left: 2rem;
  }
`;

export const OrderContent = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  border: 1px solid #f2ebe5;
  padding: 1rem 2rem;

  .firsColumn {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    div {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }

    div:first-child {
      width: 80%;
    }

    img {
      width: 100px;
      margin-right: 1rem;
    }

    a {
      font-size: 1rem;
      color: ${({ theme }) => theme.color.primaryColor};
      border: 1px solid ${({ theme }) => theme.color.primaryColor};
      width: 90%;
      height: 2rem;
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

  .secondColumn {
    display: flex;
    gap: 2rem;
    min-height: 3rem;
    padding-bottom: 1rem;
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

    .processing {
      color: #82ff5b;
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

    .separator {
      width: 1px;
      min-height: 100%;
      background-color: #f2ebe5;
    }
  }

  @media screen and (min-width: 426px) {
    img {
      width: 125px;
    }
  }
`;
