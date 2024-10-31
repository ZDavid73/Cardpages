import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
    id: string;
    username: string;
    picture: string;
}

const initialState: UserState = {
    id: '',
    username: '',
    picture: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.picture = action.payload.picture;
    },
    logout: (state) => {
      console.log('logout desde slice');
      state.id = '';
      state.username = '';
      state.picture = '';
    }
  },
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer