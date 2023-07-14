// const { createStore } = require("redux");

// import {createStore} from "redux"
// import { Reducers } from "../reducer/Reducers"


// export const mystore = createStore(Reducers);

import {configureStore} from '@reduxjs/toolkit';
import cartReducer from '../Cartslice/Cartslice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
