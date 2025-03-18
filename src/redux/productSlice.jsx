import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;  
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
    searchTerm: '',
    filteredData: [] 
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredData = state.products.filter(product =>
        product.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    }
  }, 
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.filteredData = action.payload.filter(product =>
          product.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        );
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSearchTerm } = productSlice.actions;

export default productSlice.reducer;
