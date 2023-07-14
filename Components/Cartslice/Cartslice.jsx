import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cartData',
  initialState,

  reducers: {
    addItemToCart: (state,action) => {
      return [...state, action.payload];
    },

    removeItemFromCart: (state, action) => {
      return state.filter((item, index) => index !== action.payload);
    },
  },
});

export const {addItemToCart, removeItemFromCart} = cartSlice.actions;

export default cartSlice.reducer;
