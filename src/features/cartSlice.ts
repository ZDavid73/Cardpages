import { createSlice } from '@reduxjs/toolkit'
import { SellingCard } from '../types/cardTypes';
import { Deck } from '../types/deckTypes';

export interface CartState {
    cards: SellingCard[];
    decks: Deck[];
}

const initialState: CartState = {
    cards: [],
    decks: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    insertCartCard: (state, action) => {
      state.cards.push(action.payload);
    },
    deleteCartCard: (state, action) => {
      state.cards = state.cards.filter(card => card.cardId !== action.payload);
    },
    insertCartDeck: (state, action) => {
      state.decks.push(action.payload);
    },
    deleteCartDeck: (state, action) => {
      state.decks = state.decks.filter(deck => deck.id !== action.payload);
    },
  },
})

export const { insertCartCard, insertCartDeck, deleteCartCard, deleteCartDeck } = cartSlice.actions

export default cartSlice.reducer