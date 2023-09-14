import { Link } from "react-router-dom";
import { Box, IconButton } from "@chakra-ui/react";
import { BsArrowBarLeft } from "react-icons/bs";

const BackButton = () => {
  return (
    <Box mt={4}>
      <Link to="/pokemon">
        <IconButton
          aria-label="Go back to Pokemon list"
          icon={<BsArrowBarLeft />}
          size="lg"
          variant="ghost"
          borderRadius="50%"
          pos="absolute"
          mt="20px"
          ml="-120px"
        />
      </Link>
    </Box>
  );
};

export default BackButton;
