import styled from "styled-components";

export const AccountSection = styled.section`
  width: 100%;
  padding: 1rem;

  h3 {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 24px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.color.primaryColor};
    padding: 0;
  }

  .clienteMenu {
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    top: 8.4rem;
    left: 0;
    right: 0;
    padding: 1rem;
    background-color: ${({ theme }) => theme.backgroundColor};
    height: 5rem;

    p {
      display: flex;
      gap: 0.3rem;
      align-items: center;
      flex-wrap: wrap;
      font-size: 0.9rem;
      font-weight: 600;
      color: #212121;
      padding: 0.4rem 0;
    }

    button {
      background-color: transparent;
      border: none;
    }

    @media screen and (min-width: 768px) {
      position: unset;
      height: unset;
      top: unset;
      left: unset;
      right: unset;
      padding: unset;

      background-color: unset;
      button {
        display: none;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
`;
