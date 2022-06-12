import getProduct from "./getProduct"

const getBill = async () => {
    let res = await fetch('http://localhost:8080/getallbills')
    let data = await res.json()

    return data
}

export default getBill