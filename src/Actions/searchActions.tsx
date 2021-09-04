import { Movie } from '../Types/Models/models';
import { Action } from '../Types/interface/interfaces';
import { types } from '../Types/types';
import { getSeachMovies } from '../Helpers/customsFetch';
import { setLoadingTrue, setLoadingFalse } from './loadActions';

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