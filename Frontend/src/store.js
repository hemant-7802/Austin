import { configureStore } from '@reduxjs/toolkit'
import { productDetailsReducer, productReducer } from "./reducers/productReducer.js";

// Automatically adds the thunk middleware and the Redux DevTools extension
const store = configureStore({
  // Automatically calls `combineReducers`
  reducer: {
    products: productReducer,
    productDetails: productDetailsReducer,
  },
})

export default store;
