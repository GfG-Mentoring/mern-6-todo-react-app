import { createSlice } from "@reduxjs/toolkit";


const getToken = () => {
    const token = localStorage.getItem('auth');
    return token;
}


const authSlice = createSlice({
    name: "auth",
    initialState: {
        authToken: getToken(),
        fullName: null,
        email: null,
    },
    reducers: {
        updateAuth: (state, action) => {
            const data = action.payload;
            //TODO: validation steps here;

            if (data.authToken) {
                state.authToken = data.authToken;
                localStorage.setItem('auth', data.authToken);
            }
            state.email = data.email;
            state.fullName = data.fullName;

        },
        clearAuth: (state, action) => { }
    }
});


export const { updateAuth, clearAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;