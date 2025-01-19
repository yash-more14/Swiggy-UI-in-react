import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.item.push(action.payload);
      console.log("item is added");
      console.log(state.item);
    },
    removeItem: (state, action) => {
      state.item.pop();
    },
    clearCart: (state, action) => {
      return { item: [] };
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
