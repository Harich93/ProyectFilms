import { Action, types } from '../Types/types';
import { Movie } from '../Models/models';

type MoviesRState = {
    CinemaFilms : Movie[]
    PopularFilms: Movie[]
}

const initialState:MoviesRState = {
    CinemaFilms  : [],
    PopularFilms : [],
}

export const moviesReducer = ( state:MoviesRState = initialState, action:Action ) => {

    switch ( action.type ) {
        case types.moviesSetCinemaMovies:
            return {
                ...state,
                CinemaFilms: action.payload
            };

        case types.moviesSetPopularMovies:
            return {
                ...state,
                PopularFilms: action.payload
            };
    
        default: return state;
    }
}