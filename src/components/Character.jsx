export default function Character({ character }) {
    const { id, name, img } = character
    return (
        <div className='card' key={id + name}>
            {img ? <img src={img} alt={name} /> : null}
            <p>{name}</p>
        </div>
    )
}