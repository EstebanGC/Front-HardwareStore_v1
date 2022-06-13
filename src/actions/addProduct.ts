import { createProduct } from "../state/slices/productSlice";

const addProduct = async( 
    productName: string, 
    productPrice: number,
    productDescription: string,
    minUnits: number,
    maxUnits: number, 
    availableUnits: number,
    providers: string,
    dispatch: any) => {

        const productFromForm = {
            productName: productName, 
            productPrice: productPrice,
            productDescription: productDescription,
            minUnits: minUnits,
            maxUnits: maxUnits, 
            availableUnits: availableUnits,
            providers: providers
        }

        let saveProduct = await fetch('https://hardwarestoresofkau.herokuapp.com/create/product',
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