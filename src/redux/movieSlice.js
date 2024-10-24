import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    movie: null,
};
export var movieSlice = createSlice({
    name: 'movie',
    initialState: initialState,
    reducers: {
        setMovieDetail: function (state, action) {
            state.movie = action.payload;
        },
    },
});
export var setMovieDetail = movieSlice.actions.setMovieDetail;
export default movieSlice.reducer;
