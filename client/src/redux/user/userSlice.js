import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentUser: null,
    loading: false,
    error: false,
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInProcess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = false;
        },
        signInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        rehydrateUser: (state, action) => {
            return { ...state, ...action }
        }


    }
})


export const { rehydrateUser } = userSlice.actions;
export const { signInStart, signInProcess, signInFailure } = userSlice.actions;

export default userSlice.reducer