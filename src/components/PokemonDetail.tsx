import { useParams } from "react-router-dom";
import useFetchDetail from "../customHooks/useFetchDetail";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VStack,
  HStack,
  Box,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import About from "./About";
import BaseStats from "./BaseStats";
import Moves from "./Moves";
import Pokeball from "../img/pokeball.svg";
import BackButton from "./BackButton";

const PokemonDetail: React.FC = () => {
  const { id } = useParams<{ id?: string }>() ?? { id: "" }; // Use optional chaining and provide a default value
  const { pokemon, isLoading } = useFetchDetail(id || "");

  console.log(pokemon);

  return (
    <VStack spacing={4} minH="100vh" bg="#F56565">
      <Box
        bg="#c3fffa"
        h="100%"
        p={10}
        m={5}
        borderRadius="10px"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      >
        <Box
          display="flex"
          flexDir="column"
          w="fit-content"
          borderRadius="5px"
          alignItems="center"
        >
          <VStack w="100%" justifyContent="center" gap="20px">
            <BackButton />
            <Image src={Pokeball} boxSize="50px" />
            <Heading>{pokemon?.name.toUpperCase()}</Heading>
            <HStack>
              {pokemon?.types.map((type) => (
                <Text borderRadius="20px" border="1px solid #000000" p={2}>
                  {type.type.name}
                </Text>
              ))}
            </HStack>
          </VStack>
          <Image src={pokemon?.sprites.front_default} boxSize="xs" />
        </Box>
        <Tabs>
          <TabList justifyContent="center">
            <Tab>About</Tab>
            <Tab>Base Stats</Tab>
            <Tab>Moves</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <About pokemon={pokemon} isLoading={isLoading} />
            </TabPanel>
            <TabPanel>
              <BaseStats pokemon={pokemon} isLoading={isLoading} />
            </TabPanel>
            <TabPanel>
              <Moves pokemon={pokemon} isLoading={isLoading} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </VStack>
  );
};

export default PokemonDetail;
