import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Divider,
  CardFooter,
  Link,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface Props {
  name: string;
  id: number;
  img: string;
}

const PokemonCard: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const { name, id, img } = props;

  return (
    <Card w="300px" p={2} bg="card-theme.primary">
      <CardBody>
        <Image src={img} alt="pokemon" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name.toUpperCase()}</Heading>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link onClick={() => navigate(`/pokemon/${id}`)}>Learn more</Link>
      </CardFooter>
    </Card>
  );
};

export default PokemonCard;
