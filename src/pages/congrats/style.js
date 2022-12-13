import styled from "styled-components";

export const CongratsSection = styled.section`
  width: 100%;
  height: 50vh;
  margin-top: 10rem;
`;

export const Content = styled.div`
  width: 50%;
  margin: auto;

  div {
    h3 {
      font-size: 1.8rem;
      font-weight: 700;
      color: ${({ theme }) => theme.color.primaryColor};
      text-align: center;
      margin-bottom: 1rem;
    }
    h4 {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: .3rem;
      font-size: 1rem;
      line-height: 22px;

      span {
        font-size: 0.9rem;
        font-weight: 500;
      }
    }

    .approved {
    color: green;
    font-weight: 700;
  }
  }
`;
