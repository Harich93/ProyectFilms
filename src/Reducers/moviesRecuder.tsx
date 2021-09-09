import { Action, MoviesRState } from '../types/interface/interfaces';
import {types } from '../types/types';

const initialState:MoviesRState = {
    CinemaFilms   : [],
    PopularFilms  : [],
    UpcomingFilms : [],
}

export const moviesReducer = ( state:MoviesRState = initialState, action:Action ) => {

    switch ( action.type ) {
        case types.moviesSetCinema:
            return {
                ...state,
                CinemaFilms: action.payload
            };

        case types.moviesAddCinema:
            return {
                ...state,
                CinemaFilms: [ ...state.CinemaFilms ,...action.payload  ]
            }

        case types.moviesSetPopular:
            return {
                ...state,
                PopularFilms: action.payload
            };

        case types.moviesAddPopular:
            return {
                ...state,
                PopularFilms: [ ...state.PopularFilms , ...action.payload]
            };

        case types.moviesSetUpcoming:
            return {
                ...state,
                UpcomingFilms: action.payload
            }

        case types.moviesAddUpcoming:
            return {
                ...state,
                UpcomingFilms: [ ...state.UpcomingFilms , ...action.payload]
            }
    
        default: return state;
    }
}