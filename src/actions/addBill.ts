import { createBill } from "../state/slices/billSlice";

const addBill = async(

    date: string,
    clientName: string,
    sellerName: string,
    productsSold: number,
    totalSale: number, 
    dispatch: any) => {
        const billFromForm = {

            date: date,
            clientName: clientName,
            sellerName: sellerName,
            productsSold: productsSold,
            totalSale: totalSale
        }

        let saveBill = await fetch('https://hardwarestoresofkau.herokuapp.com/create/bill',
        {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(billFromForm)
        })

        let res = await saveBill.json()

        dispatch(createBill(res))
}

export default addBill
