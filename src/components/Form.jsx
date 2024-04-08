function Form({ input, setInput }) {
    const handleSubmit = (e) => {
        e.preventDefault()
        setInput(i => i.toLowerCase().trim())
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder='Nombre del personaje' />
            <button type='submit'>Buscar</button>
        </form>
    )
}

export default Form