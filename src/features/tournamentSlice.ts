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
  reducers: {
    insertTourData: (state, action) => {
      state.tournaments.push(action.payload);
    },
    updateTourData: (state, action) => {
      const index = state.tournaments.findIndex(tour => tour.id === action.payload.id);
      state.tournaments[index] = action.payload;
    },
    deleteTourData: (state, action) => {
      state.tournaments = state.tournaments.filter(tour => tour.id !== action.payload);
    },
  },
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

export const { insertTourData, updateTourData, deleteTourData } = tournamentSlice.actions

export default tournamentSlice.reducer