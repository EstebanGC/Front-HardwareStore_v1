const getProvider = async () => {
    let res = await fetch('https://hardwarestoresofkau.herokuapp.com/getallproviders')
    let data = await res.json()

    return data
}

export default getProvider