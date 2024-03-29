import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Analytics } from '@vercel/analytics/react'

import { theme } from "./styles/GlobalStyles";
import { ToastContainer } from "react-toastify";
import Rotas from "./rotas";

import NavBar from "./components/navBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <NavBar />
          <Rotas />
          <Footer />
          <ToastContainer />
          <Analytics />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
