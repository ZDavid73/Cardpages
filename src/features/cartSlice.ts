import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { SellingCard } from '../types/cardTypes';
import { Deck } from '../types/deckTypes';
import { fetchCart } from '../services/databaseService';
import { getAuthUserId } from '../utils/storage';

export interface CartState {
    cards: SellingCard[];
    decks: Deck[];
    loading?: boolean;
    error?: string | null;
}

const initialState: CartState = {
    cards: [],
    decks: [],
    loading: false,
    error: null,
}

export const fetchUserCart = createAsyncThunk(
  'cart/fetchUserCart',
  async (_, { rejectWithValue }) => {
    try {
      const userId = getAuthUserId();

      if (!userId) {
        return rejectWithValue('User not authenticated');
      }

      const data = await fetchCart(userId);
      return data ?? { cards: [], decks: [] };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
        state.cards = action.payload.cards;
        state.decks = action.payload.decks
    },
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cards = action.payload.data?.cart.cards || [];
        state.decks = action.payload.data?.cart.decks || [];
      })
      .addCase(fetchUserCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
})

export const { insertCartCard, insertCartDeck, deleteCartCard, deleteCartDeck, setCart } = cartSlice.actions

export default cartSlice.reducer