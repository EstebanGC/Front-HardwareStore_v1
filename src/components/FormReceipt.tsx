import React, {ReactSVG, useState } from 'react'
import  { useDispatch, useSelector } from 'react-redux'
import addReceipt from '../actions/addReceipt'
import { createReceipt } from '../state/slices/receiptSlice'
import { ListReceipt } from './ListReceipt'


const FormReceipt = () => {

    const dispatch = useDispatch()

    const [receiptProviderName, setReceiptProviderName] = useState("")
    const onRecProviderNameChange = (e:React.ChangeEvent<HTMLInputElement>) => setReceiptProviderName(e.target.value)

    const [units, setUnits] = useState("")
    const onRecUnitsChange = (e:React.ChangeEvent<HTMLInputElement>) => setUnits(e.target.value)

    const [productId, setProductId] = useState("")
    const onRecProductIdChange = (e:React.ChangeEvent<HTMLInputElement>) => setProductId(e.target.value)
    
    const [date, setDate] = useState("")
    const onRecDateChange = (e:React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value)
    
    const createReceipt = (e:React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        addReceipt(receiptProviderName, parseInt(units), productId, date, dispatch)
        setReceiptProviderName("")
        setUnits("")
        setProductId("")
        setDate("")
    }

    return (
        <div>
            <form action=''>
                <label>Provider name</label>
                <input onChange={onRecProviderNameChange} type="text" name="receiptProviderName" value={receiptProviderName}/>
                <br/>
                <label>Units</label>
                <input onChange={onRecUnitsChange} type="text" name="units" value={units}/>
                <br/>
                <label>Product ID</label>
                <input onChange={onRecProductIdChange} type="text" name="productId" value={productId}/>
                <br/>
                <label>Date</label>
                <input onChange={onRecDateChange} type="text" name="date" value={date}/>
                <br/>
                <button onClick={createReceipt} type="submit">Add Receipt</button>
            </form>
            <h1>Receipts</h1>
            <ListReceipt/>
        </div>
    )
}

export default FormReceipt