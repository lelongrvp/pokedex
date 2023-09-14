import { useState } from "react";

interface SearchResult {
  name: string;
  id: number;
  img: string;
}

const usePokemonSearch = () => {
  const [pokemonName, setPokemonName] = useState<string>("");
  const [chosen, setChosen] = useState<boolean>(false);
  const [pokemonData, setPokemonData] = useState<SearchResult>({
    name: "",
    id: 0,
    img: "",
  });

  const fetchSearchPokemon = async () => {
    await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
    )
      .then((res) => res.json())
      .then((res) => {
        setPokemonData({
          name: pokemonName,
          img: res.sprites.front_default,
          id: res.id,
        });
        setChosen(true);
      });
  };
  return {
    chosen,
    pokemonName,
    setPokemonName,
    pokemonData,
    fetchSearchPokemon,
  };
};

export default usePokemonSearch;
