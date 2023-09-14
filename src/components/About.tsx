import { VStack, Box, Text, Heading, HStack } from "@chakra-ui/react";
import { Pokemon } from "../interface";

interface Props {
  pokemon: Pokemon | null;
  isLoading: boolean;
}

const About: React.FC<Props> = ({ pokemon }) => {
  return (
    <VStack>
      <HStack spacing={50} align="stretch">
        <Box display="flex" flexDir="column" py={6} rowGap={5} w="fit-content">
          <Heading size="sm">Species:</Heading>
          <Heading size="sm">Weight:</Heading>
          <Heading size="sm">Height:</Heading>
          <Heading size="sm">Abilities:</Heading>
        </Box>
        <Box display="flex" flexDir="column" py={5} rowGap={4}>
          <Text>{pokemon?.species.name}</Text>
          <Text>{pokemon ? `${pokemon?.weight / 10} kg` : "Undefined"}</Text>
          <Text>{pokemon ? `${pokemon?.height / 10} m` : "Undefined"}</Text>
          <Box display="flex" gap={5}>
            {pokemon
              ? pokemon.abilities.map(({ ability }) => (
                  <Text>{ability.name}</Text>
                ))
              : "Undefined"}
          </Box>
        </Box>
      </HStack>
    </VStack>
  );
};

export default About;
