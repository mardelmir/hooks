import { useState, useEffect } from "react"

function useFetchCharacters(url) {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState([])
    const [character, setCharacter] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                if (!response.ok) { throw new Error('Error al obtener datos de la API') }
                const jsonData = await response.json()
                setData(() => jsonData)
                setCharacter({
                    id: jsonData.id,
                    name: jsonData.name.charAt(0).toUpperCase() + jsonData.name.slice(1),
                    img: jsonData.image || jsonData.sprites.other['official-artwork'].front_default
                })
                setIsLoading(false)
            }
            catch (error) {
                console.log(error)
                setError(error)
            }
        }
        fetchData()
    }, [url])

    return {
        isLoading,
        error,
        data, // se exporta data completa en caso de que en un futuro se necesitase más información además del nombre/imagen
        character
    }
}

export default useFetchCharacters
