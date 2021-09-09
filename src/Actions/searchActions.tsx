import { Movie } from '../types/Models/models';
import { Action } from '../types/interface/interfaces';

import { getSeachMovies } from '../helpers/customsFetch';
import { setLoadingTrue, setLoadingFalse } from './loadActions';
import { types } from '../types/types';


export const startGetSearchMovies = ( query:string ) => {
    return async( dispatch:any ) => {
        try {

            dispatch( setLoadingTrue() );

            const data = await getSeachMovies( query );
            dispatch( setResults( data ) );

            setTimeout(() => {
                dispatch( setLoadingFalse() );  
            },1000);
            
        } catch (error) {
            console.warn( error );
        }
    }
}

const setResults = ( payload:Movie[] ):Action => ({
    type: types.searchSetResults,
    payload
});

export const deleteResults = ():Action => ({
    type: types.searchDeleteResults
});