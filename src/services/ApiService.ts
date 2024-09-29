import axios from 'axios';
import { ApiResponseCard, Card } from '../types/cardTypes';

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
  }));

  return cards;
};
