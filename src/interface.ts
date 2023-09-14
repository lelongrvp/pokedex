export interface Pokemons {
  name: string;
  url: string;
}

export interface Pokemon {
  abilities: [
    {
      ability: {
        name: string;
      };
    }
  ];
  id: number;
  name: string;
  game_indices: [
    {
      game_index: number;
      version: {
        name: string;
      };
    }
  ];
  height: number;
  sprites: {
    front_default: string;
  };
  species: {
    name: string;
  };
  types: [
    {
      slot: number;
      type: {
        name: string;
      };
    }
  ];
  moves: [
    {
      move: {
        name: string;
      },
    }
  ];
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    }
  ];
  weight: number;
}
