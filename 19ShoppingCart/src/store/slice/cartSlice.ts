import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProductType } from "../../page/Home";

const initialState: ProductType[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ProductType>) {
      console.log("action", action);
      const exists = state.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      console.log("REmove payload");
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
