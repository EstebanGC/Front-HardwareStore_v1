import { configureStore } from "@reduxjs/toolkit";
import providerReducer, { providertp } from "./slices/providerSlice";
import productReducer, {producttp } from "./slices/productSlice";
import billReducer, { billtp } from "./slices/billSlice";
import receiptReducer, { receipttp } from "./slices/receiptSlice";
import loggedReducer from "./slices/logInSlice";


const store = configureStore({
    reducer: {
        provider: providerReducer, 
        product: productReducer,
        bill: billReducer,
        receipt: receiptReducer,
        logged: loggedReducer
    }
})

type statetp = {
    provider: providertp[]
    product: producttp[]
    bill: billtp[]
    receipt: receipttp[]
}

export type {statetp}
export default store