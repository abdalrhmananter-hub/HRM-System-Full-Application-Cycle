import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; 

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/employees/login', credentials);
      console.log(response);
      const { token} = response.data; 
      const decoded = jwtDecode(token);
      const user = decoded;

    
      localStorage.setItem('accessToken', token);

      return user; 
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Login failed';
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
const getInitialAuthState = () => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    try {
      const decoded: any = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      
    
      if (decoded.exp > currentTime) {
        return {
          user: decoded,
          isAuthenticated: true,
          loading: false,
          error: null,
        };
      }
    } catch (error) {
      localStorage.removeItem('accessToken');
    }
  }
  
 
  return {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  };
};




const authSlice = createSlice({
  name: 'auth',
  initialState: getInitialAuthState(),
  reducers: {
    
    checkToken: (state) => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        try {
        
          const decoded = jwtDecode(token);
          
          
          const currentTime = Date.now() / 1000;
          if (decoded.exp < currentTime) {
            localStorage.removeItem('accessToken');
            state.user = null;
            state.isAuthenticated = false;
          } else {
            state.user = decoded; 
            state.isAuthenticated = true;
          }
        } catch (error) {
          localStorage.removeItem('accessToken');
          state.user = null;
          state.isAuthenticated = false;
        }
      }
    },
  
    logout: (state) => {
      localStorage.removeItem('accessToken'); 
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
        
        
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      });
  },
});

export const { checkToken, logout } = authSlice.actions;
export default authSlice.reducer;