import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../Utils/cartUtils";

// const initialState = {
//   cartItems: localStorage.getItem("cart")
//     ? JSON.parse(localStorage.getItem("cart"))
//     : [],
// };
const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : {
      cartItems: [],
      shippingAddress: {},
    };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      let exists = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (exists) {
        state.cartItems = state.cartItems.map((item) =>
          item._id === exists._id ? action.payload : item
        );
      } else state.cartItems = [...state.cartItems, action.payload];
      return updateCart(state);
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id != action.payload
      );
      return updateCart(state);
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cart");
    },
  },
});

export const { addItem, removeItem, saveShippingAddress, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
