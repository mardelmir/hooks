function Character({ character }) {
    const { id, name, img } = character
    return (
        <li className='card' key={id + name}>
            <img src={img} alt={name} />
            <p>{name}</p>
        </li>
    )
}

export default Character