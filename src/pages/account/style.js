import styled from "styled-components";

export const AccountSection = styled.section`
  width: 100%;
  min-height: 60vh;
  margin-top: 10rem;
`;

export const Header = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundColor};
  position: fixed;
  top: 8rem;

  button{
    background-color: transparent;
    border: none;
  }

  @media screen and (min-width: 767px){
    margin-left: -1rem;
    padding-right: 2rem;
    padding-left: 2rem;
  }

  @media screen and (min-width: 768px){
    display: none;
  }
`


export const Content = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
`;