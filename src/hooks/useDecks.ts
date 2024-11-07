import { postDeck, uploadImage } from '../services/databaseService'; // Importamos desde databaseService
import { Deck } from '../types/deckTypes';
import { useSelector } from 'react-redux';
import { AppState } from '../types/stateType';
import { ItemType } from './useDragDrop';
import { FormEvent } from 'react';

export const useDeckBuilder = () => {
  const userId = useSelector((state: AppState) => state.user.id);

interface HandlePostDeckProps {
  deckCover: File | null;
  deckDescription: string;
  deckName: string;
  deckPrice: string;
  items: ItemType[];
  e: FormEvent<HTMLFormElement>;
}

  const handlePostDeck = async ({deckCover, deckDescription,deckName, deckPrice, items, e}: HandlePostDeckProps) => {
    e.preventDefault();

    const data = await uploadImage(deckCover as File);

    console.log(data);

    const newDeck: Deck = {
      id: crypto.randomUUID(),
      name: deckName,
      creator: userId,
      desc: deckDescription,
      cards: items,
      price: Number(deckPrice),
      cover: `https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/${data.data?.fullPath}`,
    };

    const { error } = await postDeck(newDeck);
    if (error) {
      console.error('Error saving deck to Supabase:', error.message);
    } else {
      console.log('Deck saved successfully!');
    }
  };

  return {
    handlePostDeck,
  };
};