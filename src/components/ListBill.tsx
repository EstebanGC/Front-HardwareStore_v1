import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getBill from '../actions/getBill'
import { getAllBills, billtp } from '../state/slices/billSlice'
import { statetp } from '../state/store'

export const ListBill = () => {

    const allBills= useSelector((state: statetp)=> state.bill)

    const distpatch = useDispatch()

    useEffect(()=> {
        getBill().then(
            (bills) => {
                distpatch(getAllBills(bills))
            }
        )
    }, [])

    return (
        <div>
            {allBills.map((bill:billtp) => 
            <h1>{bill.sellerName}<br/>{bill.clientName}<br/>{bill.totalSale}<br/>{bill.date}</h1>)}
        </div>
    )
}