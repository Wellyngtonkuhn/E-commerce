import styled from "styled-components";

export const MainShop = styled.main`
  width: 100%;
  margin-top: 11rem;
  margin-bottom: 3rem;
  padding: 0 1rem;
`;

export const Content = styled.section`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 674px) {
    flex-direction: row;
  }
`;

export const MobileFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  top: 9.5rem;
  right: 1.519rem;

  button {
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.primaryColor};
    border: 1px solid ${({ theme }) => theme.color.primaryColor};
    background-color: transparent;
    padding: 0.3rem 1.5rem;
    transition: all ease 0.3s;
  }

  button:hover {
    background-color: ${({ theme }) => theme.color.primaryColor};
    box-shadow: 1px 1px 5px #0000008f;
    color: #fff;
  }

  .mobileFilter{
    display: flex;
    flex-direction: column;
    gap: .5rem;
    width: 7.5rem;
    margin-top: .5rem;
    padding: .3rem;
    background-color: ${({ theme }) => theme.backgroundColor};
    border-radius: 5px;
    box-shadow: 1px 1px 5px #0000008f;
    
    h3 {
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 24px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.primaryColor};
  }

    label{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
      color: ${({ theme }) => theme.color.primaryColor};
      font-size: 1.2rem;
      color: #212121;
    }
  }

  @media screen and (min-width: 674px) {
    display: none;
  }
`;
