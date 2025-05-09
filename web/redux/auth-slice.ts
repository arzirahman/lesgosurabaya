import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type AuthState = {
    userData?: UserData | null;
}

export type UserData = {
    email?: string;
    name?: string;
}

const initialState: AuthState = {
    userData: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<UserData | null | undefined>) => {
            state.userData = action.payload
        },
    },
});

export const { setUserData } = authSlice.actions
export default authSlice.reducer;