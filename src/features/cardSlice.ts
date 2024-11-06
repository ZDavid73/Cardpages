import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchCards } from '../services/databaseService';
import { SellingCard } from '../types/cardTypes';

export interface CardState {
    cards: SellingCard[];
    loading: boolean;
    error: string | null;
}

const initialState: CardState = {
    cards: [],
    loading: false,
    error: null,
}

export const fetchAllCards = createAsyncThunk(
    'cards/fetchAllCards',
    async (_, { rejectWithValue }) => {
      try {
        const {data} = await fetchCards();
        return data ?? [];
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    insertCardData: (state, action) => {
      state.cards.push(action.payload);
    },
    updateCardData: (state, action) => {
      const index = state.cards.findIndex(card => card.cardId === action.payload.id);
      state.cards[index] = action.payload;
    },
    deleteCardData: (state, action) => {
      state.cards = state.cards.filter(card => card.cardId !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCards.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllCards.fulfilled, (state, action) => {
        state.loading = false;
        state.cards = action.payload;
      })
      .addCase(fetchAllCards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
})

export const { insertCardData, updateCardData, deleteCardData } = cardSlice.actions

export default cardSlice.reducer