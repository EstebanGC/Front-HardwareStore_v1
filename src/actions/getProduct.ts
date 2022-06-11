const getProduct = async () => {
    let res = await fetch('http://localhost:8080/getallproducts')
    let data = await res.json()

    return data
}

export default getProduct