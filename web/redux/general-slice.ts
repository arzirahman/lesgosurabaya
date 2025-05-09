import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AlertData } from "../components/Alert";

type GeneralState = {
    loading: boolean[];
    alertData?: AlertData | null;
}

const initialState: GeneralState = {
    loading: [],
}

const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            if (action.payload) state.loading.push(action.payload);
            else state.loading.pop();
        },
        setAlert: (state, action: PayloadAction<AlertData | null>) => {
            state.alertData = action.payload;
        }
    }
});

export const { setLoading, setAlert } = generalSlice.actions
export default generalSlice.reducer;