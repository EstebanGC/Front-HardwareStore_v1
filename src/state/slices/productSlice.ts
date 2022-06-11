import { createSlice } from "@reduxjs/toolkit";
import { providertp } from "./providerSlice";

type producttp = {
    productName: string, 
    productPrice: number,
    productDescription: string,
    minUnits: number,
    maxUnits: number, 
    availableUnits: number,
    providers: string
}

const initialState: producttp[] = []

const productSlice = createSlice({
    name: "product",

    initialState,
    reducers: {
        createProduct(state, action){state.push(action.payload)},
        getAllProducts(state,action){return action.payload}
    }
})

export const {createProduct, getAllProducts} = productSlice.actions
export type {producttp}
export default productSlice.reducer