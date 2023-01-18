import styled from "styled-components";

export const CartSection = styled.section`
  width: 100%;
  margin-top: 10rem;

  .buySteps{
    background-color: #EEEEEE;
    padding: 1rem 0;

    ul{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      li{
        list-style: none;
        
        button{
          display: flex;
          align-items: center;
          gap: .5rem;
          background-color: transparent;
          border: none;
          color: ${({theme}) => theme.color.primaryColor};
          cursor: pointer;
        }
      }
    }
  }

  .cartTitle {
    font-size: 1.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.color.primaryColor};
    padding: 1rem 0;
  }

  @media screen and (min-width: 425px){
      .buySteps{
        border-radius: 25px;
        margin: auto;
      }
  }

  @media screen and (min-width: 500px){
      .buySteps{
        width: 31rem;
      }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 1rem;
  }
`;

export const FirstColumn = styled.div`
  width: 100%;
 `;

export const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 1rem 0;

  .finalTotal {
    font-weight: 700;

    div{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: .5rem;
    }
  }

  .deliveryTime{
    font-weight: 500;
    font-size: .9rem;
  }

  button {
    width: 100%;
    font-size: .95rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.primaryColor};
    border: 1px solid ${({ theme }) => theme.color.primaryColor};
    background-color: transparent;
    padding: 0.6rem 0;
    transition: all ease 0.3s;
  }

  button:hover {
    background-color: ${({ theme }) => theme.color.primaryColor};
    color: #fff;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    width: 25%;
  }

  @media screen and (min-width: 1024px) {
    button{
      font-size: 1rem;
      padding: 0.7rem 0;
    }
  }
`;
