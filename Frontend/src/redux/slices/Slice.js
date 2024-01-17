import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async () => {
    const response = await axios("http://localhost:3000/posts");
    return response.data;
  }
);
export const deleteUserData = createAsyncThunk(
  "user/deleteUserData",
  async (id) => {
    await axios.delete(`http://localhost:3000/posts/${id}`);
    const response = await axios("http://localhost:3000/posts");
    const filtered = response.data.filter((elem) => elem.id !== id);
    return filtered;
  }
);
export const postUserData = createAsyncThunk(
  "user/postUserData",
  async (newItem) => {
    const newProd = await axios.post(`http://localhost:3000/posts`, newItem);
    return newProd.data;
  }
);
export const counterSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    loading: false,
    error: null,
    wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
  },
  reducers: {
    wishlistAdd: (state, action) => {
      const item = state.wishlist.find((elem) => elem.id == action.payload.id);
      if (!item) {
        state.wishlist = [...state.wishlist, action.payload];
      } else {
        state.wishlist = state.wishlist.filter(
          (elem) => elem.id != action.payload.id
        );
      }
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(deleteUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(postUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(postUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...state.data, action.payload];
      })
      .addCase(postUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { increment, decrement, wishlistAdd } = counterSlice.actions;

export default counterSlice.reducer;
