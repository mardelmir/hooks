import { useState, useEffect } from "react"

const fetchApi = async (url) => {
    try {
        const response = await fetch(url)
        if (!response.ok) { throw new Error('Error: la solicitud para acceder a la API no ha sido exitosa') }
        const data = await response.json()
        return data
    }
    catch (error) { console.log(error) }
}

const filterData = (data) => {
    const name = data.name
    const img = data.image || data.sprites.other['official-artwork'].front_default
    return { name, img }
}


function useFetchCharacters(url) {
    const [character, setCharacter] = useState([])

    useEffect(() => {
        const renderInfo = async () => {
            try {
                const data = await fetchApi(url)
                const characterInfo = filterData(data)
               
            }
            catch (error) { console.log(error) }
        }

        renderInfo()
    }, [url])

}

export default useFetchCharacters
