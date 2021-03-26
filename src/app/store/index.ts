import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productSlice from './productSlice';
import tlrSlice from './tlrSlice';

export const store = configureStore({
	reducer: {
    product: productSlice,
    tlr: tlrSlice
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
