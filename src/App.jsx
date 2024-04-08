import './App.css';
import { useState } from "react"
import Character from './components/Character';
import useFetchCharacters from './hooks/useFecthCharacters';
import Form from './components/Form';

function App() {
  const [input, setInput] = useState('')
  // `https://pokeapi.co/api/v2/pokemon/{id or name}` SÍ es case sensitive
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';

  // `https://rickandmortyapi.com/api/character/?name={}` NO es case sensitive
  // `https://rickandmortyapi.com/api/character/{id}`
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const { character: pokeChar } = useFetchCharacters(urlPokemon)
  const { character: rickChar } = useFetchCharacters(urlRick)

  return (
    <>
      <h1>Custom Hook</h1>
      <Form input={input} setInput={setInput} />
      <ul className='characters'>
        <Character character={pokeChar} />
        <Character character={rickChar} />
      </ul>
    </>
  );
}

export default App;