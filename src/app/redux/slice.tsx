// Import createSlice, createAsyncThunk from Redux Toolkit, and your API handling library (axios in this case)
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Type definition for our user state
interface UserState {
  loading: boolean;
  user: any; // Consider defining a more specific type or interface for your user object
  error: string | null;
}

// Initial state for the user slice
const initialState: UserState = {
  loading: false,
  user: null,
  error: null,
};

// Async thunk for user login
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (credentials: { username: string; email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/login', credentials);
      // You can store the user token in localStorage or handle it however you prefer here
      // localStorage.setItem('userToken', response.data.token);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        // We are assuming the server response with an error message in error.response.data
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue('An unexpected error occurred');
    }
  }
);

// Async thunk for user signup
export const signUpUser = createAsyncThunk(
  'user/signUpUser',
  async (credentials: { username: string; email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/signup', credentials);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue('An unexpected error occurred');
    }
  }
);

// The user slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // You can add reducers here for synchronous actions, such as logging out the user
    logoutUser(state) {
      state.user = null;
      // localStorage.removeItem('userToken'); // If you're storing the token in localStorage
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle login actions
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Handle signup actions
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// Export the reducer
export default userSlice.reducer;
// Export any actions you want to use outside of this slice
export const { logoutUser } = userSlice.actions;
