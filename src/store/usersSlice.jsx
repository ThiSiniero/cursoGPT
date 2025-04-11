import { createSlice , createAsyncThunk} from '@reduxjs/toolkit';
import 'react-toastify/dist/ReactToastify.css';


export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
    
    return data;
  });

const initialState = {
    items: [],
    status: 'idle',
    error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder
        .addCase(fetchUsers.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.items = action.payload;
        })
        .addCase(fetchUsers.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
});

export default usersSlice.reducer;
