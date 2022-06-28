import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import { theme } from './Theme';
function App() {
  return <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ backgroundColor: "backDark.dark", minHeight: "100vh" }}>
        <Header />
        <Main />
      </Box>
    </ThemeProvider>
  </StyledEngineProvider>
}

export default App;
