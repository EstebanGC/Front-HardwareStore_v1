import { createSlice } from "@reduxjs/toolkit";


type billtp = {
    date: string,
    clientName: string,
    sellerName: string,
    productsSold: number,
    totalSale: number
}

const initialState: billtp[] = []

const billSlice = createSlice(
    {
        name: "bill",

        initialState,
        reducers: {
            createBill(state, action){state.push(action.payload)},
            getAllBills(state,action){return action.payload}
        }
    })

    export const {createBill, getAllBills} = billSlice.actions
    export type {billtp}
    export default billSlice.reducer

