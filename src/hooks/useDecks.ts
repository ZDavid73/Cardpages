import { postDeck, uploadImage } from '../services/databaseService'; 
import { Deck } from '../types/deckTypes';
import {  useSelector } from 'react-redux';
import { AppState } from '../types/stateType';
import { ItemType } from './useDragDrop';
import { FormEvent } from 'react';
import useModal from './useModal';

interface HandlePostDeckProps {
  deckCover: File | null;
  deckDescription: string;
  deckName: string;
  deckPrice: string;
  items: ItemType[];
  e: FormEvent;
}

export const useDeckBuilder = () => {
  const userId = useSelector((state: AppState) => state.user.id);
  const { handleClose } = useModal();

  const handlePostDeck = async ({ deckCover, deckDescription, deckName, deckPrice, items, e }: HandlePostDeckProps) => {
    e.preventDefault();

    if (deckCover) {
      const data = await uploadImage(deckCover);

      const newDeck: Deck = {
        id: crypto.randomUUID(),
        name: deckName,
        creator: userId,
        desc: deckDescription,
        cards: items,
        price: Number(deckPrice),
        cover: `https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/${data.data?.fullPath}`,
        isSold: false,
        buyerId: null,
      };

      const { error } = await postDeck(newDeck);
      if (error) {
        console.error('Error saving deck to Supabase:', error.message);
      } else {
        console.log('Deck saved successfully!');
        handleClose(); // Cerramos el modal después de guardar el deck
      }
    }
  };

  return {
    handlePostDeck,
  };
};