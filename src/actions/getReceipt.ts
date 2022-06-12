const getReceipt = async() => {
    let res = await fetch('http://localhost:8080/getallreceipts')
    let data = await res.json()

    return data
}

export default getReceipt