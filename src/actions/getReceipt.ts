const getReceipt = async() => {
    let res = await fetch('https://hardwarestoresofkau.herokuapp.com/getallreceipts')
    let data = await res.json()

    return data
}

export default getReceipt