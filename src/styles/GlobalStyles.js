import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;

        font-family: 'Roboto', sans-serif;
        font-size: 16px;
    }

    a{
      text-decoration: none;
    }
`;

export const theme = {
  container: {
    maxWidth: "81.25rem",
  },
  backgroundColor: '#f2ebe5',
  color: {
    primaryColor: "#a77c5a",
  },
};
