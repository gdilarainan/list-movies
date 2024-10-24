import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieSlice';  // Import your slice here

export const store = configureStore({
    reducer: {
        movie: movieReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
