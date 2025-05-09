import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth-slice";
import generalSlice from "./general-slice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        general: generalSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;