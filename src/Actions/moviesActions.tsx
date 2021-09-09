import { getCinemaFilms,  getPopularFilms, getUpcomingMovies } from '../helpers/customsFetch';
import { Action } from '../types/interface/interfaces';
import { Movie } from '../types/Models/models';

import { types } from '../types/types';

export const startGetCinemaMovies = ( firstFetch:boolean = false ) => {
    return async( dispatch:any ) => {
        try {
            const resp = await getCinemaFilms();

            if(resp.length === 0 ) return
            
            else firstFetch ? dispatch( setCinemaMovies( resp ) )
                            : dispatch( addCinemaMovies( resp ) )
                
        } catch (error) { console.log( error ); }
    }
};

export const startGetPopularMovies = ( firstFetch:boolean = false ) => {
    return async( dispatch:any ) => {
        try {

            const resp = await getPopularFilms();

            if(resp.length === 0 ) return
            
            else firstFetch ? dispatch( setPopularMovies( resp ))
                            : dispatch( addPopularMovies( resp ))

        } catch (error) { console.log( error ); }
    }
};

export const startGetUpcomingMovies = ( firstFetch:boolean = false ) => {
    return async( dispatch:any ) => {
        try {
            
            const resp = await getUpcomingMovies();

            if(resp.length === 0 ) return
            
            else firstFetch ? dispatch( setUpcomingMovies( resp ))
                            : dispatch( addUpcomingMovies( resp ))
            
        } catch (error) {
            console.log( error )
        }
    }
};



const setCinemaMovies = ( payload:Movie[] ):Action => ({
    type: types.moviesSetCinemaMovies,
    payload: payload
});

const addCinemaMovies = ( payload:Movie[] ):Action => ({
    type: types.moviesAddCinemaMovies,
    payload: payload
});

const setPopularMovies = ( payload:Movie[] ):Action => ({
    type: types.moviesSetPopularMovies,
    payload: payload
});

const addPopularMovies = ( payload:Movie[] ):Action => ({
    type: types.moviesAddPopularMovies,
    payload
})

const setUpcomingMovies = ( payload:Movie[] ):Action => ({
    type: types.moviesSetUpcomingMovies,
    payload: payload
});

const addUpcomingMovies = ( payload:Movie[] ):Action => ({
    type: types.moviesAddUpcomingMovies,
    payload: payload
});
