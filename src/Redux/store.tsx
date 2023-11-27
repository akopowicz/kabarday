
import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import sessionReducer from './sessionSlice'
import productReducer from "./productSlice";
import productsReducer from './productsSlice';

export const store = configureStore({
    reducer: {
       user: userReducer,
       session: sessionReducer,
       product: productReducer,
       products: productsReducer,
    },
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch