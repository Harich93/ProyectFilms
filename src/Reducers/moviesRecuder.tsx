import { Action, MoviesRState } from '../Types/interface/interfaces';
import {types } from '../Types/types';

const initialState:MoviesRState = {
    CinemaFilms   : [],
    PopularFilms  : [],
    UpcomingFilms : [],
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

        case types.moviesSetUpcomingMovies:
            return {
                ...state,
                UpcomingFilms: action.payload
            }

        case types.moviesSetSelectedMovie:
            return {
                ...state,
                SelectedFilm: action.payload
            }
    
        default: return state;
    }
}