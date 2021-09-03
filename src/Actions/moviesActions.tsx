import { getCinemaFilms, getPopularFilms } from "../Helpers/customsFetch"
import { Movie } from '../Models/models';
import { Action, types } from '../Types/types';

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

const setCinemaMovies = ( payload:Movie[] ):Action => ({
    type: types.moviesSetCinemaMovies,
    payload: payload
});

const setPopularMovies = ( payload:Movie[] ):Action => ({
    type: types.moviesSetPopularMovies,
    payload: payload
});