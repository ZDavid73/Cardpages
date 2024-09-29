import axios from 'axios';

interface Card {
  id: string;
  name: string;
  images: {
    small: string;
    large: string;
  };
  price: number;
}

interface ApiResponseCard {
  id: string;
  name: string;
  images: {
    small: string;
    large: string;
  }
  cardmarket: {
    prices: {
      averageSellPrice: number;
    };
    }
}

export const searchCards = async (query: string): Promise<Card[]> => {
  const url = `https://api.pokemontcg.io/v2/cards?q=name:${query}*`; 
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
    price: card.cardmarket.prices.averageSellPrice,
  }));

  return cards;
};
