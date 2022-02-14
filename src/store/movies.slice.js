import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {moviesService} from "../services";

const initialState = {
    movie: null,
    movies: [],
    error: null,
    status: null,
    currentPage: 1,
    totalPage: 500
}

export const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async ({curPage}, {rejectWithValue}) => {
        try {
            const {results} = await moviesService.getAll(curPage);
            return results
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const getMovieById = createAsyncThunk(
    'moviesSlice/getMovieById',
    async ({movieId}, {rejectWithValue}) => {
        try {
            return await moviesService.getById(movieId);
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        }
    },
    extraReducers: {
        [getAllMovies.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movies = action.payload
        },
        [getAllMovies.rejected]: (state, action) => {
            state.error = action.payload
        },
        [getMovieById.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movie = action.payload
        },
        [getMovieById.rejected]: (state, action) => {
            state.error = action.payload
        },
    }
})

const moviesReducer = moviesSlice.reducer;

export const {setCurrentPage} = moviesSlice.actions;

export default moviesReducer;