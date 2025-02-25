import { useState, useEffect } from 'react';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  available: boolean;
}

interface NewProduct {
  name: string;
  available: boolean;
}

interface Filters {
  sortBy: string;
  search: string;
}

// --Andre-- Set variable for base url
const url = 'http://localhost:3000/products';

const useProducts = (initialFilters: Filters) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<Filters>(initialFilters);

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  const fetchProducts = () => {
    let query = `${url}?`;
    if (filters.sortBy) query += `sortBy=${filters.sortBy}&`;
    if (filters.search) query += `search=${filters.search}&`;

    axios.get(query)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  };

  const addProduct = (newProduct: NewProduct) => {
    axios.post(url, newProduct)
      .then(response => {
        setProducts([...products, response.data]);
      })
      .catch(error => {
        console.error('There was an error adding the product!', error);
      });
  };

  const deleteProduct = (id: number) => {
    axios.delete(`http://localhost:3000/products/${id}`)
      .then(() => {
        setProducts(products.filter(product => product.id !== id));
      })
      .catch(error => {
        // Handle the error response from the backend
        const errorMessage = error.response?.data?.message || 'There was an error deleting the product!';
        console.error(errorMessage);
        // You might want to show this error to the user through a notification system
      });
  };

  return {
    products,
    filters,
    setFilters,
    addProduct,
    deleteProduct,
  };
};

export default useProducts;