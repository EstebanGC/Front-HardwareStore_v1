import { createSlice } from "@reduxjs/toolkit";

type receipttp = {
    providers: string,
    units: number,
    productId: string,
    date: string,
}

const initialState: receipttp[] = []

const receiptSlice = createSlice({
    name:"receipt",
    
    initialState,
    reducers: {
        createReceipt(state,action){state.push(action.payload)},
        getAllReceipts(state,action){return action.payload}
    }
})

export const { createReceipt, getAllReceipts}= receiptSlice.actions
export type {receipttp}
export default receiptSlice.reducer