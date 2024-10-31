import { createSlice } from '@reduxjs/toolkit'
import { Tournament } from '../types/tournamentTypes';

export interface TournamentState {
    tournaments: Tournament[];
}

const initialState: TournamentState = {
    tournaments: [],
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    updateTournaments: (state, action) => {
        state.tournaments = action.payload;
    }
  }
})

export const { updateTournaments } = modalSlice.actions

export default modalSlice.reducer