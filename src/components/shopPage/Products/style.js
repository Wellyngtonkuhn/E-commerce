import styled from "styled-components";

export const ProductsSection = styled.section`
  flex-basis: 100%;
  min-height: 15rem;
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  list-style: none;

  li {
    text-align: center;
    margin-bottom: 1rem;
  }

  li img {
    width: 150px;
  }

  li h3 {
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 2px;
    line-height: 24px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.primaryColor};
    font-family: "Gotham";
    padding: 0;
    margin-top: -40px;
  }

  li p {
    font-size: 1rem;
    font-weight: 700;
    line-height: 24px;
    text-transform: uppercase;
    color: #212121;
    font-family: "Gotham";
    padding: 0.5rem 0 1rem 0;
  }

  li a {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.color.primaryColor};
    border: 1px solid ${({ theme }) => theme.color.primaryColor};
    padding: 0.3rem 1.5rem;
    transition: all ease 0.3s;
  }

  a:hover {
    background-color: ${({ theme }) => theme.color.primaryColor};
    color: #fff;
  }

  @media screen and (min-width: 552px) {
    flex-basis: 80%;
    gap: 3rem;

    li {
      margin-bottom: unset;
    }

    li img {
      width: 200px;
    }

    li h3 {
      font-size: 0.9rem;
    }
    li p {
      font-size: 1.1rem;
    }

    li a {
      font-size: 1rem;
      padding: 0.3rem 1.5rem;
    }
  }
`;
