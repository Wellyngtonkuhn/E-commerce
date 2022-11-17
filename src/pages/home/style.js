import styled from "styled-components";

export const MainHome = styled.main`
  width: 100%;
  min-height: 100vh;
  padding-top: 8.2rem;
`;

export const HeadSection = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
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
      margin: 2rem 0;

      h3 {
        font-size: 1.3rem;
        font-weight: 500;
        color: #ffffff;
        margin-bottom: 1rem;
      }

      a {
        padding: 0.5rem 1rem;
        background-color: transparent;
        color: #ffffff;
        border: 1px solid #fff;

        font-size: 1.125rem;
        font-weight: 500;
        letter-spacing: 2px;
        line-height: 24px;
        text-transform: uppercase;
        transition: all ease 0.3s;
      }
    }

    a:hover {
      background-color: ${({ theme }) => theme.color.primaryColor};
      border: 1px solid ${({ theme }) => theme.color.primaryColor};
      cursor: pointer;
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
      padding: 3rem;
    }
  }
`;

export const BrandsSection = styled.section`
  width: 100%;
  min-height: 32.5rem;
  background-color: #e5e5e5;
  padding: 3.75rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BrandsContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 2rem;
    letter-spacing: 1px;
    line-height: 24px;
    text-transform: uppercase;
    color: #212121;
    font-weight: 300;
    text-align: center;
    padding-bottom: 2rem;

    span {
      font-weight: 700;
      font-size: 1.5rem;
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 3.75rem;
  }

  ul li img {
    width: 14rem;
    height: 13rem;
    padding: 5rem 2rem;
    border: 1px solid #aaaaaa;
  }

  ul li h3 {
    font-size: 1.125rem;
    font-weight: 500;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.color.primaryColor};
    text-align: center;
    padding: 0;
  }

  @media screen and (min-width: 768px) {
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
      gap: 1rem;
    }
  }

  @media screen and (min-width: 1285px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    .title {
      transform: rotate(-90deg);
      padding: 0;
    }
  }
`;

export const NewsLetterSection = styled.section`
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 2rem;
`;

export const NewsLetterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .title {
    font-size: 2rem;
    letter-spacing: 1px;
    line-height: 24px;
    text-transform: uppercase;
    color: #212121;
    font-weight: 300;
    text-align: center;
    padding-bottom: 2rem;

    span {
      font-weight: 700;
      font-size: 1.5rem;
    }
  }

  .cards {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    list-style: none;

    padding: 1rem;
  }

  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #212121;

    img {
      width: 100%;
      opacity: 0.7;
    }

    div {
      position: absolute;
      bottom: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 75%;
      padding-bottom: 1rem;

      p {
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 36px;
        color: #ffffff;
        text-align: center;
      }

      a {
        padding: 0.5rem 1rem;
        background-color: transparent;
        color: #ffffff;
        border: 1px solid #fff;
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: 2px;
        line-height: 24px;
        text-transform: uppercase;
        transition: all ease 0.3s;
      }

      a:hover {
        background-color: ${({ theme }) => theme.color.primaryColor};
      }
    }
  }

  .newsLetter {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;

    p {
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 30px;
      text-align: center;
      color: ${({ theme }) => theme.color.primaryColor};
    }

    form {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 45px;
      border: 1px solid ${({ theme }) => theme.color.primaryColor};
    }

    input {
      width: 80%;
      height: 100%;
      font-size: 1.3rem;
      padding: 1rem;
      border: none;

      :focus {
        outline: none;
      }
    }

    a {
      width: 20%;
      border-left: 1px solid ${({ theme }) => theme.color.primaryColor};
      text-align: center;
    }
  }

  @media screen and (min-width: 425px) {
    .title {
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 768px) {
    .title {
      font-size: 2rem;
    }

    .cards {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }

    .card {
      width: 300px;
      height: 225px;
    }

    .newsLetter {
      width: 39.125rem;
      margin: auto;

      p {
        text-align: center;
      }

      form {
        margin: 1rem 0;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .cards {
      justify-content: space-between;
    }

    .card {
      width: 285px;
    }
  }

  @media screen and (min-width: 1285px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    .title {
      transform: rotate(-90deg);
      padding: 0;
      margin-left: -38px; 
    }
  }
`;
