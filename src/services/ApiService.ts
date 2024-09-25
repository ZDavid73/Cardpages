import axios from 'axios';

interface Card {
  id: string;
  name: string;
  imageUrl: string; 
}

export const searchCards = async (game: string, query: string): Promise<Card[]> => {
  const apiBaseUrl = 'https://apitcg.com/api';
  let gameEndpoint: string;

  switch (game) {
    case 'pokemon':
      gameEndpoint = 'pokemon';
      break;
    case 'one-piece':
      gameEndpoint = 'one-piece';
      break;
    case 'dragon-ball-fusion':
      gameEndpoint = 'dragon-ball-fusion';
      break;
    case 'digimon':
      gameEndpoint = 'digimon';
      break;
    case 'magic-the-gathering':
      gameEndpoint = 'magic-the-gathering';
      break;
    default:
      throw new Error('Invalid game selected');
  }

  const url = `${apiBaseUrl}/${gameEndpoint}/cards?property=name&value=${query}`;
  const response = await axios.get(url);

  if (!response.data.cards) {
    throw new Error('No cards found');
  }

  return response.data.cards;
};
