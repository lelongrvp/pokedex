import { useEffect } from "react";
import { useState } from "react";
import { Pokemon, Pokemons } from "../interface";
import axios from "axios";
const usePokemonFetcher = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10");
      setNextUrl(res.data.next);

      // Collect new Pokemon data in an array
      const newPokemonData = await Promise.all(
        res.data.results.map(async (pokemon: Pokemons) => {
          const poke = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
          );
          return poke.data;
        })
      );

      // Update the state once with all the new Pokemon data
      setPokemons(() => [...newPokemonData]);

      setLoading(false);
    };
    fetchPokemon();
  }, []);

  const handleLoadMore = async () => {
    setLoading(true);
    const res = await axios.get(nextUrl);
    setNextUrl(res.data.next);

    // Collect new Pokemon data in an array
    const newPokemonData = await Promise.all(
      res.data.results.map(async (pokemon: Pokemons) => {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        return poke.data;
      })
    );

    // Update the state once with all the new Pokemon data
    setPokemons((p) => [...p, ...newPokemonData]);

    setLoading(false);
  };

  return { pokemons, nextUrl, isLoading, handleLoadMore };
};

export default usePokemonFetcher;
