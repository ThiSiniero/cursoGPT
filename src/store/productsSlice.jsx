import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    incrementSales: (state, action) => {
        const productId = action.payload;
        const product = state.items.find((p) => p.id === Number(productId));
        if (product) product.sales += 1;
        toast.success('Compra realizada com sucesso!', {
          position: "bottom-right",
          className: 'max-w-[60%] sm:max-w-md mt-4 mr-4',
          bodyClassName: 'text-sm',
        });   
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { incrementSales } = productsSlice.actions;

export default productsSlice.reducer;