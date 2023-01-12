import styled from "styled-components";

export const FooterSection = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
  z-index: 2;
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

export const DevSection = styled.div`
  width: 100%;
  border-top: 1px solid #a0a0a0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .5rem;

  text-align: center;
  padding: 1rem;

  h4, h5{
    font-size: .7rem;
    font-weight: 500;
  }

  ul{
    display: flex;
    gap: 1rem;
    li{
      list-style: none;

      a{
        color: unset;
      }
    }

  }
`
