import styled from "styled-components";
import { createGlobalStyle, } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;

        font-family: 'Gotham', sans-serif;
        font-size: 16px;
    }

    a{
      text-decoration: none;
    }
`;

export const theme = {
  backgroundColor: "#f2ebe5",
  color: {
    primaryColor: "#a77c5a",
  },
};

export const Container = styled.div`
  width: 100%;
  height: 100%;
  @media screen and (min-width: 767px) {
    max-width: 81.25rem;
    margin: auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
