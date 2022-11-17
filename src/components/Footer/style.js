import styled from "styled-components";

export const FooterSection = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem 1rem;

  div {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 200px;
    padding: 2rem 0;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    div {
      flex-direction: row;
      gap: 1rem;
    }
  }
`;
