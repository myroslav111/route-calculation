import { routeCalculationSlice } from './slice';

import { configureStore, combineReducers } from '@reduxjs/toolkit';
// ...

const rootReducer = combineReducers({
  routeCalculation: routeCalculationSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type TypeRootState = ReturnType<typeof rootReducer>;
