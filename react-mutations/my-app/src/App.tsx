/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useState } from 'react';
import { PokemonList } from './PokemonList';

export function App() {
  const [pokedex, setPokedex] = useState([
    { number: '001', name: 'Bulbasaur' },
    { number: '004', name: 'Charmander' },
    { number: '007', name: 'Squirtle' },
    { number: '025', name: 'Pikachu' },
    { number: '039', name: 'Jigglypuff' },
  ]);

  function handleAdd(): void {
    const metapod = { number: '011', name: 'Metapod' };
    setPokedex([...pokedex, metapod]);
  }

  function handleUpdate(): void {
    setPokedex(
      pokedex.map((p) => (p.number === '011' ? { ...p, name: 'Rob' } : p))
    );
  }

  function handleRemove(): void {
    // wanted to try the spread operator with the filter method
    setPokedex([...pokedex.filter((p) => p.number !== '011')]);
  }

  return (
    <div>
      <PokemonList pokedex={pokedex} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}
