import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Tournament } from '../types/tournamentTypes';
import { fetchTournaments } from '../services/databaseService';

export interface TournamentState {
    tournaments: Tournament[];
    loading: boolean;
    error: string | null;
}

const initialState: TournamentState = {
    tournaments: [],
    loading: false,
    error: null,
}

export const fetchAllTournaments = createAsyncThunk(
    'tournaments/fetchAllTournaments',
    async (_, { rejectWithValue }) => {
      try {
        const {data} = await fetchTournaments();
        return data ?? [];
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

export const tournamentSlice = createSlice({
  name: 'tournaments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTournaments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllTournaments.fulfilled, (state, action) => {
        state.loading = false;
        state.tournaments = action.payload;
      })
      .addCase(fetchAllTournaments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
})

export default tournamentSlice.reducer