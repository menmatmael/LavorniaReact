import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import CssBaseline from '@mui/material/CssBaseline';
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import ProductDetails from './../../features/catalog/ProductDetails';
import AboutPage from './../../features/about/AboutPage';
import ContactPage from './../../features/contact/ContactPage';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const paletteType = darkMode ? 'dark' : 'light';

  const myTheme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  });

  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <Container>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='catalog' element={<Catalog />} />
          <Route path='catalog/:id' element={<ProductDetails />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='contact' element={<ContactPage />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
