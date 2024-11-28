import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
    id: string;
    username: string;
    picture: string;
    level: number;
    header: string;
    gender?: string;
    country?: string;
    birthDate?: string;
}

const initialState: UserState = {
    id: '',
    username: '',
    picture: '',
    level: 0,
    header: 'https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/Header%20Images/pokemon-101-1280x960.webp',
    gender: '',
    country: '',
    birthDate: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.picture = action.payload.picture;
      state.level = action.payload.level;
      state.header = action.payload.header || initialState.header;
      state.gender = action.payload.gender;
      state.country = action.payload.country;
      state.birthDate = action.payload.birthDate;
    },
    logout: (state) => {
      console.log('logout desde slice');
      state.id = '';
      state.username = '';
      state.picture = '';
      state.level = 0;
      state.header = initialState.header;
      state.gender = '';
      state.country = '';
      state.birthDate = '';
    },
    updateUser: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.picture = action.payload.picture;
      state.level = action.payload.level;
      state.gender = action.payload.gender;
      state.country = action.payload.country;
      state.birthDate = action.payload.birthDate;
      if (action.payload.header) {
        state.header = action.payload.header;
      }
    },


},
})

export const { login, logout, updateUser} = userSlice.actions
export default userSlice.reducer