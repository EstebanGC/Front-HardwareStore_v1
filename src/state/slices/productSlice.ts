import { createSlice } from "@reduxjs/toolkit";

type producttp = {
    productName: string, 
    productPrice: number,
    productDescription: string,
    minUnits: number,
    maxUnits: number, 
    availableUnits: number
    //providers
}

const initialState: producttp[] = [
    {
        productName: "Prod1", 
        productPrice: 20,
        productDescription: "Great",
        minUnits: 15,
        maxUnits: 95, 
        availableUnits: 35
    }
]

const productSlice = createSlice({
    name: "product",

    initialState,
    reducers: {
        createProduct(state, action){state.push(action.payload)},
        getAllProducts(state,action){return action.payload}
    }
})

export const {createProduct, getAllProducts}=productSlice.actions
export type {producttp}
export default productSlice.reducer