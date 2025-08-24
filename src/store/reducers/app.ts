import { getItem, setItem } from '@/helper/localstorage.helper';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataLocal: getItem('dataLocal'),
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setDataLocal: (state, { payload }) => {
      setItem('dataLocal', payload);
      state.dataLocal = payload;
    },
  },
});

export const { setDataLocal } = appSlice.actions;

export default appSlice.reducer;
