import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getReceipt from '../actions/getReceipt'
import { getAllReceipts } from '../state/slices/receiptSlice'
import { statetp } from '../state/store'

export const ListReceipt = () => {

    const allReceipts = useSelector((state:statetp)=> state.receipt)

    const dispatch = useDispatch()


    useEffect(() => {
        getReceipt().then(
            (receipts) => {
                dispatch(getAllReceipts(receipts))
            }
    )
            
    }, [])

    return (
        <div>
            
        </div>
    )
}


