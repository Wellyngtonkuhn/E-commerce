import styled from "styled-components";

export const HighlightsSection = styled.section`
  width: 100%;
  margin-bottom: 3rem;

  .title {
    font-size: 2rem;
    letter-spacing: 1px;
    line-height: 24px;
    text-transform: uppercase;
    color: #212121;
    font-weight: 300;
    text-align: center;
    padding: 4rem 0 2rem 0;

    span {
      font-weight: 700;
      font-size: 1.5rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ul {
    list-style: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  li {
    padding-bottom: 1rem;
  }

  img {
    width: 250px;
  }

  h3 {
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 2px;
    line-height: 24px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.primaryColor};
    font-family: "Gotham";
    padding: 0;
    margin-top: -40px;
  }

  p {
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 24px;
    text-transform: uppercase;
    color: #212121;
    font-family: "Gotham";
    padding: 0.5rem 0 1rem 0;
  }

  a {
    font-size: 1rem;
    color: ${({ theme }) => theme.color.primaryColor};
    border: 1px solid ${({ theme }) => theme.color.primaryColor};
    padding: 0.3rem 1.5rem;
    transition: all ease 0.3s;
  }

  a:hover {
    background-color: ${({ theme }) => theme.color.primaryColor};
    color: #fff;
  }

  @media screen and (min-width: 425px) {
    
    padding: 0 1rem;

    ul{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      li{
        width: 40%;
      }

      li img{
        width: 100%;
      }
    }
   
  }

  @media screen and (min-width: 1024px) {
    ul li {
      width: 30%;

      img{
        width: 100%;
      }
    }
  }

  @media screen and (min-width: 1285px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    .title {
      transform: rotate(-90deg);
      padding: 0;
      margin-left: -60px;
    }
    
    ul li {
      width: 25%;

      img{
        width: 100%;
      }
    }
  }
`;
