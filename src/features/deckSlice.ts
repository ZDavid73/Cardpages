import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchDecks } from '../services/databaseService';
import { Deck } from '../types/deckTypes';

export interface DeckState {
    decks: Deck[];
    loading: boolean;
    error: string | null;
}

const initialState: DeckState = {
    decks: [],
    loading: false,
    error: null,
}

export const fetchAllDecks = createAsyncThunk(
    'decks/fetchAllDecks',
    async (_, { rejectWithValue }) => {
      try {
        const {data} = await fetchDecks();
        return data ?? [];
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

export const decksSlice = createSlice({
  name: 'decks',
  initialState,
  reducers: {
    insertDeckData: (state, action) => {
      state.decks.push(action.payload);
    },
    updateDeckData: (state, action) => {
      const index = state.decks.findIndex(deck => deck.id === action.payload.id);
      state.decks[index] = action.payload;
    },
    deleteDeckData: (state, action) => {
      state.decks = state.decks.filter(deck => deck.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllDecks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllDecks.fulfilled, (state, action) => {
        state.loading = false;
        state.decks = action.payload;
      })
      .addCase(fetchAllDecks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
})

export const { insertDeckData, updateDeckData, deleteDeckData } = decksSlice.actions

export default decksSlice.reducer