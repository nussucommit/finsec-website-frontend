import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

interface UserState {
    loading: boolean;
    user: any; 
    error: any; 
}

const initialState: UserState = {
    loading: false,
    user: null,
    error: null
}

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (credentials: {username: string, email: string, password: string}) => {
        try {
            const response = await axios.post('/api/login', credentials);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const signUpUser = createAsyncThunk(
    'user/signUpUser',
    async (credentials: {username: string, email: string, password: string}) => {
        try {
            const response = await axios.post('/api/signup', credentials);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);


const userSlice = createSlice({ //slice that do something with the user state, from the state variable that contains all the states

    name: 'user', 
    initialState,
    reducers: {
        
    },
    extraReducers: builder => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                state.error = action.error; 
            })
            .addCase(signUpUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signUpUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(signUpUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                state.error = null;
            })
    }
});

export default userSlice.reducer;