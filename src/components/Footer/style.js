import styled from "styled-components";

export const FooterSection = styled.section`
  min-width: 512px;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

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
    justify-content: center;

    div {
      flex-direction: row;
      gap: 1rem;
    }
  }

  @media screen and (min-width: 1024px) {
    justify-content: space-between;
  }
`;
