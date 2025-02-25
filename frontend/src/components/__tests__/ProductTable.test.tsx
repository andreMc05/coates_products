import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import React from 'react';
import ProductTable from '../ProductTable';

describe('ProductTable', () => {
  const mockProducts = [
    { id: 1, name: 'Pizza', available: true },
    { id: 2, name: 'Burger', available: false },
  ];

  const mockDeleteProduct = vi.fn();

  it('renders product table with correct headers', () => {
    render(<ProductTable products={mockProducts} />);
    
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Available')).toBeInTheDocument();
  });

  it('displays products with correct availability', () => {
    render(<ProductTable products={mockProducts} />);
    
    expect(screen.getByText('Pizza')).toBeInTheDocument();
    expect(screen.getByText('Burger')).toBeInTheDocument();
    expect(screen.getAllByText('Yes')).toHaveLength(1);
    expect(screen.getAllByText('No')).toHaveLength(1);
  });

  it('shows delete button only for unavailable products when showActions is true', () => {
    render(
      <ProductTable 
        products={mockProducts} 
        handleDeleteProduct={mockDeleteProduct}
        showActions={true}
      />
    );

    const deleteButtons = screen.getAllByText('Delete');
    expect(deleteButtons).toHaveLength(1); // Only one delete button for unavailable product
  });

  it('calls handleDeleteProduct when delete is confirmed', async () => {
    render(
      <ProductTable 
        products={mockProducts} 
        handleDeleteProduct={mockDeleteProduct}
        showActions={true}
      />
    );

    // Click delete button
    fireEvent.click(screen.getByText('Delete'));
    
    // Confirm deletion in dialog
    fireEvent.click(screen.getByText('Delete', { selector: '.MuiDialogActions-root button' }));
    
    expect(mockDeleteProduct).toHaveBeenCalledWith(2);
  });
}); 