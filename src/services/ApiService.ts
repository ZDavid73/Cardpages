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
    flavorText: card.flavorText,
  }));

  return cards;
};

export const searchCardById = async (id: string): Promise<Card> => {
  const url = `https://api.pokemontcg.io/v2/cards/${id}`;
  const response = await axios.get(url);

  if (!response.data || !response.data.data) {
    throw new Error('Card not found');
  }

  const card: Card = {
    id: response.data.data.id,
    name: response.data.data.name,
    images: {
      small: response.data.data.images.small,
      large: response.data.data.images.large,
    },
    flavorText: response.data.data.flavorText,
  };

  return card;
};