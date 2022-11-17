import styled from "styled-components";

export const AsideSection = styled.aside`
  flex-basis: 20%;
  max-width: 20%;
  min-height: 15rem;

  display: none;

  @media screen and (min-width: 674px) {
    display: flex;
  }
`;

export const AsideContent = styled.div`
  position: fixed;
  padding: 1rem;

  h3 {
    font-size: 1.3rem;
    font-weight: 300;
    letter-spacing: 1px;
    line-height: 24px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.primaryColor};
  }

  label {
    font-size: 1rem;
    color: #212121;
    input {
      margin-bottom: 0.5rem;
      margin-right: 0.5rem;
      :hover {
        cursor: pointer;
      }
    }
    :hover {
      cursor: pointer;
    }
  }

  .checkbox {
    margin: 0.5rem 0;
    margin-left: 0.5rem;
  }

  div {
    margin-bottom: 1rem;
  }
`;
