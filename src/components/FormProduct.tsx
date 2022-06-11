import React, {useState } from 'react'
import  { useDispatch, useSelector } from 'react-redux'
import addProduct from '../actions/addProduct'
import { statetp } from '../state/store'
import { ListProduct } from './ListProduct'



const FormProduct = () => {

    const dispatch = useDispatch()

    const [productName, setProductName] = useState("")
    const onProdNameChange = (e:React.ChangeEvent<HTMLInputElement>) => setProductName(e.target.value)

    const [productPrice, setProductPrice] = useState("")
    const onProdPriceChange = (e:React.ChangeEvent<HTMLInputElement>) => setProductPrice(e.target.value)

    const [productDescription, setProductDescription] = useState("")
    const onProdDescriptionChange = (e:React.ChangeEvent<HTMLInputElement>) => setProductDescription(e.target.value)

    const [productMinUnits, setProductMinUnits] = useState("")
    const onProdMinUnitsChange = (e:React.ChangeEvent<HTMLInputElement>) => setProductMinUnits(e.target.value)

    const [productMaxUnits, setProductMaxUnits] = useState("")
    const onProdMaxUnitsChange = (e:React.ChangeEvent<HTMLInputElement>) => setProductMaxUnits(e.target.value)

    const [productAvailableUnits, setProductAvailableUnits] = useState("")
    const onProdAvailableUnitsChange = (e:React.ChangeEvent<HTMLInputElement>) => setProductAvailableUnits(e.target.value)


    const createProduct = (e:React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        addProduct(productName,parseFloat(productPrice),productDescription, parseInt(productMinUnits), parseInt(productMaxUnits), parseInt(productAvailableUnits), dispatch)
        setProductName("")
        setProductPrice("") 
        setProductDescription("") 
        setProductMinUnits("")
        setProductMaxUnits("")
        setProductAvailableUnits("")
    }

    return (
        <div>
            <form action=''>
                <label>Name</label>
                <input onChange={onProdNameChange} type="text" name="productName" value={productName} />
                <br/>
                <label>Price</label>
                <input onChange={onProdPriceChange} type="text" name="productPrice" value={productPrice} />
                <br/>
                <label>Description</label>
                <input onChange={onProdDescriptionChange} type="text" name="productDescription" value={productDescription}/>
                <br/>
                <label>Minimum Units</label>
                <input onChange={onProdMinUnitsChange} type="text" name="productMinUnits" value={productMinUnits}/>
                <br/>
                <label>Maximum Units</label>
                <input onChange={onProdMaxUnitsChange} type="text" name="productMaxUnits" value={productMaxUnits}/>
                <br/>
                <label>Available Units</label>
                <input onChange={onProdAvailableUnitsChange} type="text" name="productAvailableUnits" value={productAvailableUnits}/>
                
                <button onClick={createProduct} type="submit">Add Product</button>
            </form>
            <h1>Products</h1>
            <ListProduct/>
        </div>
    )

}

export default FormProduct