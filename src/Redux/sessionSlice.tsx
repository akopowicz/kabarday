import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface UserState {
  isLoggedIn: boolean
}

const initialState: UserState = {
    isLoggedIn: false,
}

export const sessionSlice = createSlice({
  name: "session", //nazwa reducera
  initialState,
  reducers: {
    //akcje
    loginStatus: (state, action: PayloadAction<boolean>) => {
        state.isLoggedIn = action.payload
    }
  },
});

export const { loginStatus } = sessionSlice.actions;

export const selectUser=(state:RootState)=>state.session
export default sessionSlice.reducer;