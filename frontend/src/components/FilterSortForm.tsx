import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Grid, Typography, Box, TextField, Paper } from '@mui/material';

interface FilterSortFormProps {
  filter: { sortBy: string; search: string };
  handleFilterChange: (e: any) => void;
}

const FilterSortForm: React.FC<FilterSortFormProps> = ({ filter, handleFilterChange }) => {
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
        Filter and Sort Products
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel 
              sx={{
                '&.Mui-focused': {
                  color: '#724620',
                }
              }}
            >
              Sort By
            </InputLabel>
            <Select
              name="sortBy"
              value={filter.sortBy}
              onChange={handleFilterChange}
              sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(0, 0, 0, 0.23)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#72462080',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#724620',
                },
              }}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="name">Name</MenuItem>
              <MenuItem value="available">Availability</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Search"
            name="search"
            value={filter.search}
            onChange={handleFilterChange}
            fullWidth
            variant="outlined"
            placeholder="Search products..."
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
      </Grid>
    </Paper>
  );
};

export default FilterSortForm;