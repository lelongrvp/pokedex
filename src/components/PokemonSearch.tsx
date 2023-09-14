import { Box, Input, Text, Button, Flex, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import usePokemonSearch from "../customHooks/usePokemonSearch";

const PokemonSearch = () => {
  const navigate = useNavigate();
  const { chosen, setPokemonName, pokemonData, fetchSearchPokemon } =
    usePokemonSearch();

  return (
    <Box maxW="400px" mx="auto" mt="4">
      <Input
        type="text"
        placeholder="Search Pokémon..."
        onChange={(e) => setPokemonName(e.target.value)}
      />
      <Button
        mt="2"
        leftIcon={<MdSearch />}
        colorScheme="teal"
        onClick={fetchSearchPokemon}
      >
        Search
      </Button>
      <Flex mt="4" flexWrap="wrap">
        {chosen ? (
          <Box
            key={pokemonData.name}
            onClick={() => navigate(`/pokemon/${pokemonData.id}`)}
            cursor="pointer"
            m="2"
            p="3"
            borderRadius="lg"
            boxShadow="md"
            bg="card-theme.primary"
          >
            <Image src={pokemonData.img} />
            <Box fontWeight="bold">{pokemonData.name}</Box>
          </Box>
        ) : (
          <Text>Please type the Pokemon's Name correctly</Text>
        )}
      </Flex>
    </Box>
  );
};

export default PokemonSearch;
