import styled from "styled-components";

export const HeadContainer = styled.section`
  width: 100%;
  min-height: 100vh;

  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const HeadContent = styled.div`
  height: 100%;
  padding-top: 5rem;

  display: flex;
  flex-direction: column;

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
    width: 80%;
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
    max-width: ${({ theme }) => theme.container.maxWidth};
    margin: auto;
    padding-top: 10rem;
    padding-left: 1rem;
    padding-right: 1rem;

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
      width: 450px;
      padding: 2rem 0 5.43rem 0;
    }
  }
`;
