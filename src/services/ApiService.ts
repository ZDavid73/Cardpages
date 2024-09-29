import axios from 'axios';

interface Card {
  id: string;
  name: string;
  images: {
    small: string;
    large: string;
  };
}

interface ApiResponseCard {
  id: string;
  name: string;
  images: {
    small: string;
    large: string;
  };
}

export const searchCards = async (game: string, query: string): Promise<Card[]> => {
  const url = `/api/${game}/cards?property=name&value=${query}`; 
  const response = await axios.get(url);

  if (!response.data || !response.data.data) {
    throw new Error('No cards found');
  }

  const cards: Card[] = response.data.data.map((card: ApiResponseCard) => ({
    id: card.id,
    name: card.name,
    images: {
      small: card.images.small,
      large: card.images.large,
    },
  }));

  return cards;
};
