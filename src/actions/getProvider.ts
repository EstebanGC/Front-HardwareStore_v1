const getProvider = async () => {
    let res = await fetch('http://localhost:8080/getallproviders')
    let data = await res.json()

    return data
}

export default getProvider