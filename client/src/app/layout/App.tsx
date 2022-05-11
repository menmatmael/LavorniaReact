import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import CssBaseline from '@mui/material/CssBaseline';
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const paletteType = darkMode ? 'dark' : 'light';

  const myTheme = createTheme({
    palette: {
      mode: paletteType, 
      background:{
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
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
