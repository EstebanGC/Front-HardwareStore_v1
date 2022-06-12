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

        </div>
    )
}