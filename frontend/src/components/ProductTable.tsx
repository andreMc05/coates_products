import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from '@mui/material';

interface Product {
  id: number;
  name: string;
  available: boolean;
}

interface ProductTableProps {
  products: Product[];
  handleDeleteProduct?: (id: number) => void;
  showActions?: boolean;
}

const ProductTable: React.FC<ProductTableProps> = ({ products, handleDeleteProduct, showActions = false }) => {
  // --Andre-- State management for dialog and possible delete products
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<number | null>(null);

  // --Andre-- Method for opening delete dialog
  const handleOpenDeleteDialog = (id: number) => {
    setProductToDelete(id);
    setDeleteDialogOpen(true);
  };

  // --Andre-- Method for closing delete dialog
  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
    setProductToDelete(null);
  };

  // --Andre-- Method for confirming item delete
  const handleConfirmDelete = () => {
    if (productToDelete !== null) {
      handleDeleteProduct?.(productToDelete);
    }
    handleCloseDeleteDialog();
  };

  return (
    <>
      <TableContainer component={Paper}
      sx={{
        userSelect: 'none',
      }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Available</TableCell>
              {/*  --Andre-- Show column only if on manage page */}
              {showActions && <TableCell>Actions</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map(product => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.available ? 'Yes' : 'No'}</TableCell>
                {/*  --Andre-- Show column only if on manage page */}
                {showActions && handleDeleteProduct && (
                  <TableCell>
                    {!product.available && (
                      <Button variant="contained" color="error" onClick={() => handleOpenDeleteDialog(product.id)}>
                        Delete
                      </Button>
                    )}
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/*  --Andre-- Added confirmation dialog */}

      <Dialog
        open={deleteDialogOpen}
        onClose={handleCloseDeleteDialog}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <DialogTitle id="delete-dialog-title">
          Confirm Delete
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-dialog-description">
            Are you sure you want to delete "<strong>{products.find(p => p.id === productToDelete)?.name}</strong>"? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} color="primary" tabIndex={0}>
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="error" tabIndex={0}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProductTable;