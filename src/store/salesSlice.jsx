import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {};

const salesSlice = createSlice({
  name: 'sales',
  initialState,
  reducers: {
    addSale: (state, action) => {
      const id = action.payload;
      state[id] = (state[id] || 0) + 1;
      toast.success('Compra realizada com sucesso!', {
        position: "bottom-right",
        className: 'max-w-[60%] sm:max-w-md mt-4 mr-4',
        bodyClassName: 'text-sm',
      });  
    }
  }
});

export const { addSale } = salesSlice.actions;
export default salesSlice.reducer;
