import { useEffect } from "react";
import { useState } from "react";
import { Pokemon } from "../interface";
import axios from "axios";

const useFetchDetail = (id: string) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(res.data);
        setLoading(false);
      } catch (err) {
        console.log("Failed to fetch detail");
        setPokemon(null);
        setLoading(false);
      }
    };
    id && fetchPokemonDetail();
  }, [id]);
  return { pokemon, isLoading };
};

export default useFetchDetail;
