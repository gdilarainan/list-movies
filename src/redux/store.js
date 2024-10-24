import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieSlice'; // Import your slice here
export var store = configureStore({
    reducer: {
        movie: movieReducer,
    },
});
