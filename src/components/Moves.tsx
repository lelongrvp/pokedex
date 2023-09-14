import { useState } from "react"
import { Pokemon } from "../interface";
import { VStack, Box, Heading, Flex, Button } from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md"
interface Props {
  pokemon: Pokemon | null;
  isLoading: boolean;
}

const Moves: React.FC<Props> = ({ pokemon }) => {
  const [visible, setVisible] = useState(3)

  return (
    <VStack>
      <Box display="flex" flexDir="column" rowGap={5} w="fit-content" >
        {pokemon?.moves.slice(0, visible).map(({move}) => (
          <Flex 
            justifyContent="center" 
            bg="linear-gradient(68.3deg, rgba(245,177,97,1) 0.4%, rgba(236,54,110,1) 100.2% )" 
            p="10px" 
            borderRadius="10px"
          >
            <Heading size="md" color="whiteAlpha.900">{move.name}</Heading>
          </Flex>
        ))}
      </Box>
      <Button variant="ghost" onClick={() => setVisible(visible + 3)}>
        <MdArrowDropDown/>
      </Button>
    </VStack>
  )
};

export default Moves;
