import { TypeFrom, TypeInitialState } from './types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: TypeInitialState = {
  from: {} as TypeFrom,
  to: {} as TypeFrom,
  travelTime: 0,
  selectedOption: '',
};

export const routeCalculationSlice = createSlice({
  name: 'tax',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setFrom: (state, action) => {
      state.from = action.payload;
    },

    setTo: (state, action) => {
      state.to = action.payload;
    },

    setTravelTime: (state, action) => {
      state.travelTime = action.payload;
    },
    setSelectedOptions: (state, action) => {
      state.selectedOption = action.payload;
    },
  },
});
