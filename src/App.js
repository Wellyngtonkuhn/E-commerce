import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/GlobalStyles";
import { ToastContainer } from 'react-toastify';
import Rotas from "./rotas";

import Warning from "./components/warning";
import NavBar from "./components/navBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Warning />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <NavBar />
          <Rotas />
          <Footer />
          <ToastContainer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
