import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentUser: null,
    loading: false,
    // error: false,
}


const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInProcess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            // state.error = false;
        },
        signInFailure: (state) => {
            state.loading = false;
            // state.error = action.payload;
        },

    }
})


export const { signInStart, signInProcess, signInFailure } = userReducer.actions;

export default userReducer.reducer