import { useState, useEffect } from "react"

export default function useFetchCharacters(url) {
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
                setIsLoading(false)
                setCharacter({ // habría que hacerlo para que valiese para CUALQUIER API
                    id: jsonData.id,
                    name: jsonData.name.charAt(0).toUpperCase() + jsonData.name.slice(1),
                    img: jsonData.image || jsonData.sprites.other['official-artwork'].front_default
                })
            }
            catch (error) {
                console.error(error)
                setError(error)
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])

    return {
        isLoading,
        error,
        data, // se exporta data completa en caso de que en un futuro se necesitase más información además del nombre/imagen
        character
    }
}

// Clase
// export const useFetch = (url) => {
//     const [character, setCharacter] = useState(null)
//     const [isLoading, setIsLoading] = useState(true)

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(url)
//                 const data = await response.json()
//                 setCharacter(data)
//                 setIsLoading(false)
//             }
//             catch (error) {
//                 console.log(error)
//             }
//         }
//         fetchData
//     }, [url]) // [] puede estar vacío también

//     return { character, isLoading }
// }