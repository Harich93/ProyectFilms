import { getCinemaFilms, getPopularFilms, getUpcomingMovies } from '../Helpers/customsFetch';
import { Action } from '../Types/interface/interfaces';
import { Movie } from '../Types/Models/models';
import { types } from '../Types/types';

export const startGetCinemaMovies = () => {
    return async( dispatch:any ) => {
        try {
            const resp = await getCinemaFilms();
            dispatch( setCinemaMovies( resp ) );
            
        } catch (error) { console.log( error ); }
    }
};

export const startGetPopularMovies = () => {
    return async( dispatch:any ) => {
        try {
            const resp = await getPopularFilms();
            dispatch( setPopularMovies( resp ) );
            
        } catch (error) { console.log( error ); }
    }
};

export const startGetUpcomingMovies = () => {
    return async( dispatch:any ) => {
        try {
            
            const resp = await getUpcomingMovies();
            dispatch( setUpcomingMovies( resp ) );
            
        } catch (error) {
            console.log( error )
        }
    }
};

export const setSelectedMovie = ( payload:Movie ):Action => ({
    type: types.moviesSetSelectedMovie,
    payload: payload
});

const setCinemaMovies = ( payload:Movie[] ):Action => ({
    type: types.moviesSetCinemaMovies,
    payload: payload
});

const setPopularMovies = ( payload:Movie[] ):Action => ({
    type: types.moviesSetPopularMovies,
    payload: payload
});

const setUpcomingMovies = ( payload:Movie[] ):Action => ({
    type: types.moviesSetUpcomingMovies,
    payload: payload
});
