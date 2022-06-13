import { createProvider } from "../state/slices/providerSlice";

const addProvider = async( 
    providerName: string, 
    email: string, 
    passport: string, 
    dispatch: any) => {

    const providerFromForm ={
        providerName: providerName ,
        email: email,
        passport: passport
    }

    let saveProvider = await fetch('https://hardwarestoresofkau.herokuapp.com/create/provider',
    {
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(providerFromForm)
    })

    let res = await saveProvider.json()

    dispatch(createProvider(res))

}

export default addProvider