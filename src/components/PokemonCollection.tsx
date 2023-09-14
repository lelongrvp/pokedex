import { Pokemon } from "../interface";
import PokemonCard from "./PokemonCard";

interface Props {
  pokemons: Pokemon[];
}

const PokemonCollection: React.FC<Props> = (props) => {
  const { pokemons } = props;

  return (
    <div className="pokemon-grid">
      {pokemons.map((pokemon) => (
        <div>
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            id={pokemon.id}
            img={pokemon.sprites.front_default}
          />
        </div>
      ))}
    </div>
  );
};

export default PokemonCollection;
