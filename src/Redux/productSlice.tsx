import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface ProductState {
    productType: string,
}

const initialState: ProductState = {
    productType: "all",
}

export const productSlice = createSlice({
    name: "product", //nazwa reducera
    initialState,
    reducers: {
        setProductType: (state, action: PayloadAction<string>) => {
            state.productType = action.payload
        },
       
    },
});

export const { setProductType } = productSlice.actions;

export const selectProductType = (state: RootState) => state.product.productType
export default productSlice.reducer;