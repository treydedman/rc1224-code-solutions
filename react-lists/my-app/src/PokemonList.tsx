import { Pokemon } from './App';

type PokemonListProps = {
  pokedex: Pokemon[];
};
export function PokemonList({ pokedex }: PokemonListProps) {
  const characterList = pokedex.map((pokemon) => (
    <li key={pokemon.number}>{pokemon.name} </li>
  ));
  return <ul>{characterList}</ul>;
}
