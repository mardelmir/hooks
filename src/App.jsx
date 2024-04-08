import './App.css';
import useFecthCharacters from './hooks/useFecthCharacters';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const pokeTest = useFecthCharacters(urlPokemon)
  const rickTest = useFecthCharacters(urlRick)
  
  return (
    <>
    <h1>Holi</h1>
    {pokeTest}
    {rickTest}
    </>
  );
}

export default App;