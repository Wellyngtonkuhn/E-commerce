import styled from "styled-components";

export const MainHome = styled.main`
  width: 100%;
  min-height: 100vh;
`;

export const HeadSection = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const Container = styled.div`
  @media screen and (min-width: 767px) {
    max-width: ${({ theme }) => theme.container.maxWidth};
    margin: auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const HeadContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  padding-bottom: 5rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5rem;
  }

  h2 {
    font-size: 4rem;
    font-weight: 500;
    letter-spacing: 8px;
    line-height: 24px;
    text-transform: uppercase;
    color: #ffffff;
    text-align: center;
    padding-bottom: 1rem;
  }

  img {
    width: 70%;
  }

  p {
    color: ${({ theme }) => theme.color.primaryColor};
    font-size: 1.125rem;
    font-weight: 500;
    letter-spacing: 2px;
    line-height: 24px;
    text-transform: uppercase;
  }

  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    div {
      padding-bottom: none;
    }

    h2 {
      font-size: 5rem;
      padding-bottom: unset;
    }

    img {
      width: 90%;
      padding: 2rem 0 5.43rem 0;
    }
  }

  @media screen and (min-width: 1024px) {
    img {
      width: 450px;
    }
  }
`;

export const EspecialOffersSection = styled.section`
  width: 100%;
  height: 100%;
  margin-top: -7rem;
  margin-bottom: 2rem;
`;

export const EspecialOffersContent = styled.div`
  display: flex;
  flex-direction: column;

  div {
    padding: 0.5rem;
  }
  img {
    width: 100%;
  }

  .offerImgContent {
    position: relative;

    div {
      width: 60%;
      position: absolute;
      bottom: 0;
      right: 5px;
      text-align: center;

      h3 {
        font-size: 1.3rem;
        color: #ffffff;
        font-weight: 500;
      }

      button {
        margin: 1.2rem 0;
        padding: 0.5rem 1rem;
        background-color: transparent;
        color: #ffffff;
        border: 1px solid #fff;

        font-size: 1.125rem;
        letter-spacing: 2px;
        line-height: 24px;
        text-transform: uppercase;
        font-weight: 500;
      }
    }
    .offerContent {
      width: 75%;
      right: unset;
    }
  }

  .secondColumn {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .infoDelivery {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid ${({ theme }) => theme.color.primaryColor};

    div {
      text-align: center;
      color: ${({ theme }) => theme.color.primaryColor};
      width: 50%;
    }

    div:first-child {
      border-right: 1px solid ${({ theme }) => theme.color.primaryColor};
    }

    img {
      width: 2rem;
    }

    h3 {
      font-size: 1.2rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      font-weight: 700;
    }

    p {
      font-size: 1.1rem;
      line-height: 36px;
      color: #b2b2b2;
      font-weight: bold;
      font-family: "Myriad Pro";
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;

    .firstColumn {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .offerImgContent {
      div {
        h3 {
          font-size: 1.875rem;
        }
        button {
          font-size: 1.5rem;
          cursor: pointer;
        }
      }
    }
    .infoDelivery {
      div h3 {
        font-size: 1.2rem;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .infoDelivery {
      padding: 2rem;
    }
  }
`;
