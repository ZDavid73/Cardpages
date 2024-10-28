import { createSlice } from '@reduxjs/toolkit'

export interface ModalState {
    isOpen: boolean;
    modal: string | null;
}

const initialState: ModalState = {
    isOpen: false,
    modal: null,
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
    }
  }
})

export default modalSlice.reducer