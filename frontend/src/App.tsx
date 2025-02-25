import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';
import ListProductsPage from './ListProductsPage';
import ManageProductsPage from './ManageProductsPage';

const App: React.FC = () => {
  return (
    <Router>
      <Box sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8f5f2 0%, #fff8f0 100%)',
        paddingY: 4,
      }}>
        <Container>
          <Box 
            display="flex" 
            justifyContent="space-between" 
            alignItems="center" 
            mb={4}
            sx={{ 
              padding: '.5rem 2rem', 
              userSelect: 'none',
            }}
          >
            <Typography 
              variant="h2" 
              gutterBottom
              sx={{
                color: '#724620',
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                textShadow: '2px 2px 4px rgba(114, 70, 32, 0.15)',
                fontFamily: '"Poppins", sans-serif',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-8px',
                  left: '0',
                  width: '240px',
                  height: '4px',
                  background: 'linear-gradient(to right, #724620, rgba(114, 70, 32, 0.3))',
                  borderRadius: '2px',
                }
              }}
            >
              Products
            </Typography>
            <Box>
              <Button 
                component={Link} 
                to="/" 
                variant="contained" 
                sx={{ 
                  marginRight: '10px',
                  backgroundColor: '#278b21',
                  '&:hover': {
                    backgroundColor: '#1f6d19'
                  }
                }}
              >
                Product List
              </Button>
              <Button 
                component={Link} 
                to="/manage" 
                variant="contained" 
                sx={{ 
                  backgroundColor: '#a5642c',
                  '&:hover': {
                    backgroundColor: '#844f23'
                  }
                }}
              >
                Manage Products
              </Button>
            </Box>
          </Box>
          <Routes>
            <Route path="/" element={<ListProductsPage />} />
            <Route path="/manage" element={<ManageProductsPage />} />
          </Routes>
        </Container>
      </Box>
    </Router>
  );
};

export default App;