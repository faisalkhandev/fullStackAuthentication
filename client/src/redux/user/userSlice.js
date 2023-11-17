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
        },
        updateUserStart: (state) => {
            state.loading = true;
        },
        updateUserInProcess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = false;
        },
        updateUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },



    }
})


export const { rehydrateUser } = userSlice.actions;
export const { signInStart, signInProcess, signInFailure, updateUserStart, updateUserInProcess, updateUserFailure } = userSlice.actions;

export default userSlice.reducer