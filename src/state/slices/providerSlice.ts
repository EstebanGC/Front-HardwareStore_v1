import { createSlice } from "@reduxjs/toolkit";

type providertp = {
    providerName: string,
    email: string,
    passport: string
}

const initialState: providertp[] = [
    {
        providerName: "Prov1", 
        email: "whatever@whenever.com",
        passport: "1e2r3t4y5u6i7o"
    }
]

const providerSlice = createSlice({
    name: "provider",

    initialState, 
    reducers: {
        createProvider(state, action){state.push(action.payload)},
        getAllProviders(state,action){return action.payload}
    }
})


export const {createProvider, getAllProviders}=providerSlice.actions
export type {providertp}
export default providerSlice.reducer 