import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getProduct from '../actions/getProduct'
import { getAllProducts, producttp } from '../state/slices/productSlice'
import { statetp } from '../state/store'

export const ListProduct = () => {

    const allProducts = useSelector((state:statetp)=> state.product)

    const dispatch = useDispatch()

    useEffect(() => {
        getProduct().then(
            (products) => {
                dispatch(getAllProducts(products))
            }
        )
    }, [])
  return (
    <div>
    {allProducts.map((product:producttp) =>  
    <h3>{product.productDescription}<br/>{product.productPrice}<br/>{product.providers}</h3>)}
    </div>
  )

}
