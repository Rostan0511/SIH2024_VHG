import { CssBaseline, Container, Typography, Box } from '@mui/material';
import MainLayout from './components/MainLayout.jsx'; // Correct import path

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ my: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom align="center">
            Plant Map Explorer 🌿
          </Typography>
          <MainLayout /> {/* Use the component */}
        </Box>
      </Container>
    </>
  );
}

export default App;