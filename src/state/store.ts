import { configureStore } from "@reduxjs/toolkit";
import providerReducer, { providertp } from "./slices/providerSlice";
import productReducer, {producttp } from "./slices/productSlice";


const store = configureStore({
    reducer: {
        provider: providerReducer, 
        product: productReducer,

    }
})

type statetp = {
    provider: providertp[]
    product: producttp[]
}




export type {statetp}
export default store