const getBill = async () => {
    let res = await fetch('https://hardwarestoresofkau.herokuapp.com/getallbills')
    let data = await res.json()

    return data
}

export default getBill