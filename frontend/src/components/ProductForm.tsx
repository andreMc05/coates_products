import React from 'react';
import { TextField, Button, Grid, Typography, Box, Paper } from '@mui/material';

interface ProductFormProps {
  newProduct: { name: string; available: boolean };
  handleInputChange: (e: any) => void;
  handleAddProduct: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ newProduct, handleInputChange, handleAddProduct }) => {
  return (
    <Paper 
      elevation={3} 
      sx={{
        padding: 3,
        mb: 4,
        background: 'linear-gradient(to right bottom, #ffffff, #f8f5f2)',
        borderRadius: 2,
        border: '1px solid rgba(114, 70, 32, 0.1)'
      }}
    >
      <Typography 
        variant="h5" 
        gutterBottom
        sx={{
          color: '#724620',
          fontWeight: 600,
          borderBottom: '2px solid #72462033',
          paddingBottom: 1,
          marginBottom: 3
        }}
      >
        Add New Product to Menu
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Product Name"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
            placeholder="e.g., Margherita Pizza"
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: '#72462080',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#724620',
                },
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#724620',
              }
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleAddProduct} 
            fullWidth
            sx={{ 
              height: '56px',
              backgroundColor: '#724620',
              '&:hover': {
                backgroundColor: '#5a371a'
              },
              fontWeight: 600,
              textTransform: 'none',
              fontSize: '1rem',
              boxShadow: '0 2px 8px rgba(114, 70, 32, 0.2)',
              '&:active': {
                transform: 'translateY(1px)'
              }
            }} 
          >
            Add to Menu
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProductForm;