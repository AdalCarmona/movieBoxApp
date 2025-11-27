const callingAPI = async (path, headers = null) => {
    try {
        if(headers!=null){
            const resp = await fetch(path, {
            method: "GET",
            headers: headers
        });
        if (!resp.ok) throw new Error(`HTTP error! status: ${resp.status}`)
        const data = await resp.json()
        await console.log(data)
        return data
        } else{
            const resp = await fetch('https://imdb.iamidiotareyoutoo.com/search?q=High')
            if (!resp.ok) throw new Error(`HTTP error! status: ${resp.status}`)
            const data = await resp.json()
            await console.log(data)
            return data
        }
    } catch (err) {
        console.error('callingAPI error:', err)
        throw err
    }
}

export default callingAPI
