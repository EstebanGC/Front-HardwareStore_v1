const getProduct = async () => {
    let res = await fetch('https://hardwarestoresofkau.herokuapp.com/getallproducts')
    let data = await res.json()

    return data
}

export default getProduct