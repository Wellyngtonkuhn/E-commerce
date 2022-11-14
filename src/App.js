import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/GlobalStyles";

import Rotas from "./rotas";

import Warning from "./components/warning";
import NavBar from './components/navBar'

function App() {
  return (
    <>
      <Warning />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
        <NavBar />
        <Rotas />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
