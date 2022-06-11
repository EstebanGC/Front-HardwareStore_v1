import React, { useEffect } from 'react'

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
    <div>ListProduct</div>
  )
}
