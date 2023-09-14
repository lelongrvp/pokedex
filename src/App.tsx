import "./App.css";
import PokemonCollection from "./components/PokemonCollection";
import usePokemonFetcher from "./customHooks/usePokemonFetcher";
import { Button, Box, Stack, HStack, Image } from "@chakra-ui/react";
import Pokeball from "./img/pokeball.svg";
import PokedexLogo from "./img/Pokédex_logo.png";
import PokemonSearch from "./components/PokemonSearch";

const App: React.FC = () => {
  const { pokemons, isLoading, handleLoadMore } = usePokemonFetcher();

  return (
    <Stack className="container" justifyItems="center">
      <Box className="content">
        <HStack justifyContent="center" p={10}>
          <Image src={Pokeball} maxW="80px" />
          <Image src={PokedexLogo} maxH="80px" />
        </HStack>
        <PokemonSearch />
        <PokemonCollection pokemons={pokemons} />
        <Box w="100%" display="flex" justifyContent="center" p={5}>
          <Button variant="ghost" onClick={handleLoadMore}>
            {isLoading ? "Loading..." : "Load more"}
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};

export default App;
