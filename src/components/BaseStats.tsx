import { Box, Heading, Progress, VStack } from "@chakra-ui/react";
import { Pokemon } from "../interface";

interface Props {
  pokemon: Pokemon | null;
  isLoading: boolean;
}

interface Stats {
  [key: string]: number;
}

interface StatBarProps {
  label: string;
  value: number;
  max: number;
}

const StatBar: React.FC<StatBarProps> = ({ label, value, max }) => {
  const percentage = (value / max) * 100;

  return (
    <Box w="100%">
      <Heading size="sm" mb={3}>
        {label}: {value}
      </Heading>
      <Progress size="sm" value={percentage} colorScheme="red" />
    </Box>
  );
};

const BaseStats: React.FC<Props> = ({ pokemon }) => {
  if (!pokemon) {
    return null;
  }

  const stats: Stats = {};

  pokemon.stats.forEach((stat) => {
    stats[stat.stat.name] = stat.base_stat;
  });

  return (
    <VStack gap="20px">
      <StatBar label="HP" value={stats.hp} max={100} />
      <StatBar label="Attack" value={stats.attack} max={100} />
      <StatBar label="Defense" value={stats.defense} max={100} />
      <StatBar
        label="Special Attack"
        value={stats["special-attack"]}
        max={100}
      />
      <StatBar
        label="Special Defense"
        value={stats["special-defense"]}
        max={100}
      />
      <StatBar label="Speed" value={stats.speed} max={100} />
    </VStack>
  );
};

export default BaseStats;
