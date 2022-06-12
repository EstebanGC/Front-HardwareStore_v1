import React, { ReactSVG, useState } from 'react'
import  { useDispatch, useSelector } from 'react-redux'
import addBill from '../actions/addBill'
import { ListBill } from './ListBill'


const FormBill = () => {
    const dispatch = useDispatch()


    const [date, setDate] = useState("")
    const onBillDateChange = (e:React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value)

    const [clientName, setClientName] = useState("")
    const onBillClientNameChange = (e:React.ChangeEvent<HTMLInputElement>) => setClientName(e.target.value)

    const [sellerName, setSellerName] = useState("")
    const onBillSellerNameChange = (e:React.ChangeEvent<HTMLInputElement>) => setSellerName(e.target.value)

    const [totalSale, setTotalSale] = useState("")
    const onBillTotalSaleChange = (e:React.ChangeEvent<HTMLInputElement>) => setTotalSale(e.target.value)

    const [productsSold, setProductsSold] = useState("")
    const onBillProductsSoldChange = (e:React.ChangeEvent<HTMLInputElement>) => setProductsSold(e.target.value)
    
    const createBill = (e:React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        addBill(date, clientName, sellerName, parseInt(productsSold), parseInt(totalSale), dispatch)
        setDate("")
        setClientName("")
        setSellerName("")
        setProductsSold("")
        setTotalSale("")
    }

    return (
        <div>
            <form action=''>
                <label>Date</label>
                <input onChange={onBillDateChange} type="text" name="date" value={date} />
                <br/>
                <label>Client name</label>
                <input onChange={onBillClientNameChange} type="text" name="clientName" value={clientName} />
                <br/>
                <label>Seller name</label>
                <input onChange={onBillSellerNameChange} type="text" name="sellerName" value={sellerName} />
                <br/>
                <label>Total sale</label>
                <input onChange={onBillTotalSaleChange} type="text" name="totalSale" value={totalSale} />
                <br/>
                <label>Products sold</label>
                <input onChange={onBillProductsSoldChange} type="text" name="productsSold" value={productsSold} />
                <br/>
                <button onClick={createBill} type="submit">Add Bill</button>
            </form>
            <h1>Bill</h1>
            <ListBill/>
        </div>
    )

   


}

export default FormBill