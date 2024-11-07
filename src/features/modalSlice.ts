import { createSlice } from '@reduxjs/toolkit'
import { Tournament } from '../types/tournamentTypes';
import { Deck } from '../types/deckTypes';
import { SellingCard } from '../types/cardTypes';

export interface ModalState {
    isOpen: boolean;
    modal: string | null;
    modalDetails: Tournament | SellingCard | Deck | null;
}

const initialState: ModalState = {
    isOpen: false,
    modal: null,
    modalDetails: null,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.modal = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modal = null;
    },
    setModalDetails: (state, action) => {
      state.modalDetails = action.payload;
    }
  }
})

export const { openModal, closeModal, setModalDetails } = modalSlice.actions

export default modalSlice.reducer