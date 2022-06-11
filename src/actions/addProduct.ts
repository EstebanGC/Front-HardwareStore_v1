import { createProduct } from "../state/slices/productSlice";

const addProduct = async( 
    productName: string, 
    productPrice: number,
    productDescription: string,
    minUnits: number,
    maxUnits: number, 
    availableUnits: number,
    dispatch: any) => {

        const productFromForm = {
            productName: productName, 
            productPrice: productPrice,
            productDescription: productDescription,
            minUnits: minUnits,
            maxUnits: maxUnits, 
            availableUnits: availableUnits
        }

        let saveProduct = await fetch('http://localhost:8080/create/product',
        {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(productFromForm)

        })

        let res = await saveProduct.json()

        dispatch(createProduct(res))
    }

    export default addProduct