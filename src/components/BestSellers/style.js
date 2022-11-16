import styled from "styled-components";

export const BestSellersSection = styled.section`
  width: 100%;
  margin-bottom: 3rem;

  h3 {
    font-size: 2rem;
    letter-spacing: 1px;
    line-height: 24px;
    text-transform: uppercase;
    color: #212121;
    font-weight: 300;
    text-align: center;
    padding-top: 2rem;

    span {
      font-weight: 700;
      font-size: 1.5rem;
    }
  }
`;

export const Content = styled.div`
  @media screen and (min-width: 1285px) {
    display: flex;
    justify-content: end;

    .title {
      transform: rotate(-90deg);
      padding: 0;
      padding-top: 2rem;
    }
  }
`;

export const Ul = styled.ul`
  list-style: none;
  text-align: center;

  li {
    padding-bottom: 1rem;
  }

  img {
    width: 250px;
  }

  h3 {
    font-size: 1rem;
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
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 24px;
    text-transform: uppercase;
    color: #212121;
    font-family: "Gotham";
    padding: 0.5rem 0 1rem 0;
  }

  a {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.color.primaryColor};
    border: 1px solid ${({ theme }) => theme.color.primaryColor};
    padding: 0.3rem 1.5rem;
    transition: all ease 0.3s;
  }

  a:hover {
    background-color: ${({ theme }) => theme.color.primaryColor};
    color: #fff;
  }

  @media screen and (min-width: 758px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  @media screen and (min-width: 1285px) {
    gap: 1rem;
  }
`;
