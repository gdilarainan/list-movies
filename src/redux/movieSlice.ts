import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieDetailResponse } from '../types/IMovie';

interface MovieState {
    movie: MovieDetailResponse | null;
}

const initialState: MovieState = {
    movie: null,
};

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovieDetail: (state, action: PayloadAction<MovieDetailResponse>) => {
            state.movie = action.payload;
        },
    },
});

export const { setMovieDetail } = movieSlice.actions;

export default movieSlice.reducer;
