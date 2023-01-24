import styled from "styled-components";

export const CongratsSection = styled.section`
  width: 100%;
  height: 50vh;
  margin-top: 10rem;
`;

export const Content = styled.div`
  width: 95%;
  margin: auto;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;

    h3 {
      font-size: 1.5rem;
      font-weight: 700;
      color: ${({ theme }) => theme.color.primaryColor};
      text-align: center;
      margin-bottom: 1rem;
    }
    h4 {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.3rem;
      font-size: 1rem;
      line-height: 22px;

      span {
        font-size: 0.9rem;
        font-weight: 500;
      }
    }

    .loading {
      position: fixed;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100px;
    }

    .approved {
      color: green;
      font-weight: 700;
    }

    a {
      width: 100%;
      font-size: 0.95rem;
      font-weight: 700;
      text-transform: uppercase;
      text-align: center;
      color: ${({ theme }) => theme.color.primaryColor};
      border: 1px solid ${({ theme }) => theme.color.primaryColor};
      background-color: transparent;
      padding: 0.6rem 0;
      transition: all ease 0.3s;
    }

    a:hover {
      background-color: ${({ theme }) => theme.color.primaryColor};
      color: #fff;
      cursor: pointer;
    }

    @media screen and (min-width: 425px) {
      a {
        width: 21rem;
      }
    }
  }
`;
