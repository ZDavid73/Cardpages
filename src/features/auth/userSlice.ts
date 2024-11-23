import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
    id: string;
    username: string;
    picture: string;
    level: number;
}

const initialState: UserState = {
    id: '',
    username: '',
    picture: '',
    level: 0,
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
    },
    logout: (state) => {
      console.log('logout desde slice');
      state.id = '';
      state.username = '';
      state.picture = '';
      state.level = 0;
    },
    updateUser: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.picture = action.payload.picture;
      state.level = action.payload.level;
    },
  },
})

export const { login, logout, updateUser } = userSlice.actions
export default userSlice.reducer