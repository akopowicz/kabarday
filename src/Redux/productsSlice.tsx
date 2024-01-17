// import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from './store'

// interface ProductState {
//     type: string;
//     composition: string;
//     description: string;
//     name: string;
//     price: number;
//     sex: string;
//     stock: number;
// }

// const initialState: ProductState[] = []

// export const productsSlice = createSlice({
//     name: "products", //nazwa reducera
//     initialState,
//     reducers: {

//         setProducts: (state, action: PayloadAction<ProductState>) => {
//             console.log(action.payload)
//             console.log(state)
//         },

//     },
// });

// export const { setProducts } = productsSlice.actions;

// export const productsState = (state: RootState) => state.products
// export default productsSlice.reducer;