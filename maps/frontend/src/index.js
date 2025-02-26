import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './styles/global.css'; // Import global styles
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Create a custom theme for Material-UI
const theme = createTheme({
  palette: {
    primary: {
      main: '#2e7d32', // Green color
    },
    secondary: {
      main: '#ff5722', // Orange color
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
  },
});

// Create a root for ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalize CSS and apply baseline styles */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);