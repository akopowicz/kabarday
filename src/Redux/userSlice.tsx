import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

export type UserRole= "notLogged" | "admin" | "customer"

interface UserState {
  role: UserRole
}

const initialState: UserState = {
  role: "notLogged",
}

export const userSlice = createSlice({
  name: "user", //nazwa reducera
  initialState,
  reducers: {
    //akcje
    userRole: (state, action: PayloadAction<UserRole>) => {
        state.role = action.payload
    },
    
  },
});

export const { userRole } = userSlice.actions;

export const selectUser=(state:RootState)=>state.user
export const selectUserRole=(state:RootState)=>state.user.role
export default userSlice.reducer;