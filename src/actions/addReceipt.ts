import { createReceipt } from "../state/slices/receiptSlice";

const addReceipt = async (
    providers: string,
    units: number,
    productId: string,
    date: string,
    dispatch: any) => {

        const receiptFromForm = {
            providers: providers,
            units: units,
            productId: productId,
            date: date
        }

        let saveReceipt = await fetch('http://localhost:8080/create/receipt',
        {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(receiptFromForm)
        })

        let res = await saveReceipt.json()

        console.log(res)

        dispatch(createReceipt(res))
}

export default addReceipt

