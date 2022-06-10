import { configureStore } from "@reduxjs/toolkit";
import providerReducer, { providertp } from "./slices/providerSlice";


const store = configureStore({
    reducer: {
        provider: providerReducer, 
    }
})

type statetp = {
    provider: providertp[]
}

export type {statetp}
export default store