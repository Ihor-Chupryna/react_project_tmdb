import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {genresService} from "../services";

const initialState = {
    genres: [],
    moviesByGenres: [],
    error: null,
    status: null,
    id: null,
    currentPage: 1,
    totalPage: 500
}

export const getAllGenres = createAsyncThunk(
    'genresSlice/getAllGenres',
    async () => {
        try {
            const {genres} = await genresService.getAll();
            return genres
        } catch (e) {
            console.log(e)
        }
    }
)

export const getMoviesByGenre = createAsyncThunk(
    'genresSlice/getMoviesByGenre',
    async ({genreId, pageNumber}, {rejectWithValue}) => {
        try {
            const {results} = await genresService.filmsByGenre(genreId, pageNumber);
            return results
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const genresSlice = createSlice(
    {
        name: 'genresSlice',
        initialState,
        reducers: {
            setGenreId: (state, action) => {
                state.id = action.payload
            },
            setCurrentPage: (state, action) => {
                state.currentPage = action.payload
            }
        },
        extraReducers: {
            [getAllGenres.fulfilled]: (state, action) => {
                state.status = 'fulfilled'
                state.genres = action.payload
            },
            [getMoviesByGenre.fulfilled]: (state, action) => {
                state.status = 'fulfilled'
                state.moviesByGenres = action.payload
            },
            [getMoviesByGenre.rejected]: (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
            }
        }
    },
)

const genresReducer = genresSlice.reducer;

export const {setGenreId, setCurrentPage} = genresSlice.actions;

export default genresReducer