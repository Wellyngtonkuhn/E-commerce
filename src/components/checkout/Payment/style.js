import styled from "styled-components";

export const PaymentSection = styled.section`
  h3 {
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 24px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.primaryColor};
  }

  .approved, .payment {
    margin-top: 0.7rem;
    display: flex;
    flex-direction: column;
    gap: .3rem;
    h4 {
      color: green;
      font-size: 1rem;
      font-weight: 700;
      letter-spacing: 1px;
      line-height: 24px;
      text-transform: uppercase;
    }

    p {
      font-weight: 700;

      span {
        font-weight: 400;
      }
    }
  }
`;
