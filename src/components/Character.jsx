function Character({ character }) {
    const { id, name, img } = character
    return (
        <div className='card' key={id + name}>
            <img src={img} alt={name} />
            <p>{name}</p>
        </div>
    )
}

export default Character