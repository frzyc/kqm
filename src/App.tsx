import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './App.css';
import Main from './Main';
import { theme } from './Theme';
function App() {
  return <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ backgroundColor: "black", minHeight: "100vh" }}>
        <Main />
      </Box>
    </ThemeProvider>
  </StyledEngineProvider>
}

export default App;
