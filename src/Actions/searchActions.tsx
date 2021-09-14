import { Movie, Serie } from '../types/Models/models';
import { Action, iSearchRState } from '../types/interface/interfaces';

import { getSeachMovies, getSeachSeries } from '../helpers/customsFetch';
import { setLoadingTrue, setLoadingFalse } from './loadActions';
import { types } from '../types/types';


export const startGetSearch = ( query:string, find: 'movie' | 'tv' ) => {
    return async( dispatch:any, getState:Function ) => {
        try {

            const { Find } = getState().searchR as iSearchRState
            
            dispatch( setLoadingTrue() )
            
            if(Find === 'movie') {

    
                const data = await getSeachMovies( query );
                dispatch( setResults( data ) )

            } else {
        
                const data = await getSeachSeries( query )
                dispatch( setResults( data ) )

            }

                setTimeout(() => {
                    dispatch( setLoadingFalse() );  
                },1000);


        } catch (error) {
            console.warn( error );
        }
    }
}


export const deleteResults = ():Action => ({
    type: types.searchDeleteResults
});

export const setFindMovie = ():Action => ({
    type: types.searchSetFindMovie
});

export const setFindSerie = ():Action => ({
    type: types.searchSetFindSerie
});

const setResults = ( payload:Movie[] | Serie[] ):Action => ({
    type: types.searchSetResults,
    payload
});

