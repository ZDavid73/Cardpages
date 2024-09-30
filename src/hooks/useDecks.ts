import { useState } from 'react';
import { supabase } from '../services/supabaseClient'; 
import { Card } from '../types/cardTypes';
import { Deck } from '../types/deckTypes';

const startingDeck: Deck = {
    id: '',
    name: '',
    creator: '',
    desc: '',
    cards: [],
}

export const useDeckBuilder = () => {
  const [localDeck, setLocalDeck] = useState<Deck>(startingDeck);

  const addCardToDeck = (card: Card) => {
    setLocalDeck((p) => ({...p, cards: [...p.cards, card]}));
  };

  const removeCardFromDeck = (cardId: string) => {
    setLocalDeck((p) => ({...p, cards: p.cards.filter(c => c.id !== cardId)}));
  };

  const clearDeck = () => {
    setLocalDeck(startingDeck);
  };

  const updateName = (name: string) => {
    setLocalDeck((p) => ({...p, name}));
  }

    const updateDesc = (desc: string) => {
        setLocalDeck((p) => ({...p, desc}));
    }

  const postDeck = async () => {
    if (localDeck.cards.length === 0) {
      console.error('Deck is empty! Cannot save.');
      return;
    }

    const newDeck: Deck = {
      id: crypto.randomUUID(), 
      name: localDeck.name,
      creator: 'empty for now',
        desc: localDeck.desc,
      cards: localDeck.cards,
    };

    const { error } = await supabase
      .from('decks')
      .insert([newDeck]);

    if (error) {
      console.error('Error saving deck to Supabase:', error.message);
    } else {
      clearDeck();
    }
  };

  return {
    localDeck,
    addCardToDeck,
    removeCardFromDeck,
    clearDeck,
    updateName,
    updateDesc,
    postDeck
  };
};
