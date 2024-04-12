import './App.css';
import Character from './components/Character.jsx';
import useFetchCharacters from './hooks/useFecthCharacters.js';

export default function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const { character: pokeChar, isLoading: pokeLoad, error: pokError } = useFetchCharacters(urlPokemon)
  const { character: rickChar, isLoading: rickLoad, error: rickError } = useFetchCharacters(urlRick)

  return (
    <>
      <h1>Custom Hook</h1>
      <div className='characters'>
        {pokeLoad
          ? (<h3>Cargando Pokémon...</h3>)
          : !pokError
            ? (<Character character={pokeChar} />)
            : (<h3>{pokError}</h3>)}

        {rickLoad
          ? (<h3>Cargando Rick & Morty...</h3>)
          : !rickError
            ? (<Character character={rickChar} />)
            : (<h3>{rickError}</h3>)}
      </div>
    </>
  );
}

// Clase
{/* <>
  {pokeLoad
    ? <p>Loading pokemon...</p>
    :
    <div>
      <h2>Personaje pokemon</h2>
      <p>{pokeChar.name}</p>
      <img src={poke.sprites.other['official-artwork'].front_default} alr={pokeChar.name} />
    </div>
  }
</> */}
{/* <>
  {pokeChar===null
    ? <p>Loading pokemon...</p>
    :
    <div>
      <h2>Personaje pokemon</h2>
      <p>{pokeChar.name}</p>
      <img src={poke.sprites.other['official-artwork'].front_default} alr={pokeChar.name} />
    </div>
  }
</> */}