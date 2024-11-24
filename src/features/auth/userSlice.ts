import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
    id: string;
    username: string;
    picture: string;
    level: number;
    headerImageUrl?: string;
}

const initialState: UserState = {
    id: '',
    username: '',
    picture: '',
    level: 0,
    headerImageUrl: 'https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/Header%20Images/pokemon-101-1280x960.webp',
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
      state.headerImageUrl = action.payload.headerImageUrl || initialState.headerImageUrl;
    },
    logout: (state) => {
      console.log('logout desde slice');
      state.id = '';
      state.username = '';
      state.picture = '';
      state.level = 0;
      state.headerImageUrl = initialState.headerImageUrl;
    },
    updateUser: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.picture = action.payload.picture;
      state.level = action.payload.level;
      if (action.payload.headerImageUrl) {
        state.headerImageUrl = action.payload.headerImageUrl;
      }
    },
    updateHeaderImage: (state, action: PayloadAction<string>) => {
      state.headerImageUrl = action.payload;  
  },
},
})

export const { login, logout, updateUser, updateHeaderImage } = userSlice.actions
export default userSlice.reducer