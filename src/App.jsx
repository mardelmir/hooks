import './App.css';
import Character from './components/Character';
import useFetchCharacters from './hooks/useFecthCharacters';

function App() {
  // `https://pokeapi.co/api/v2/pokemon/{id or name}`
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';

  // `https://rickandmortyapi.com/api/character/?name={}`
  // `https://rickandmortyapi.com/api/character/{id}`
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const { character: pokeChar } = useFetchCharacters(urlPokemon)
  const { character: rickChar } = useFetchCharacters(urlRick)

  return (
    <>
      <h1>Custom Hook</h1>
      <ul className='characters'>
        <Character character={pokeChar} />
        <Character character={rickChar} />
      </ul>
    </>
  );
}

export default App;