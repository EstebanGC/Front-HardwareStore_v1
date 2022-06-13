import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getReceipt from '../actions/getReceipt'
import providerSlice from '../state/slices/providerSlice'
import { getAllReceipts, receipttp } from '../state/slices/receiptSlice'
import { statetp } from '../state/store'

export const ListReceipt = () => {

    const allReceipts = useSelector((state: statetp) => state.receipt)

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
            {allReceipts.map((receipt: receipttp) =>
                <h3>{receipt.providers}<br />{receipt.units}<br />{receipt.date}</h3>)}
        </div>
    )
}


