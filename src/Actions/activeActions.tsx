import { getCreditsMovie, getDetailsMovies, getRecommendMovies, getSimilarMovies } from '../Helpers/customsFetch';
import { Action } from '../Types/interface/interfaces';
import { types } from "../Types/types";
import { Cast, Movie, DetailsModel } from '../Types/Models/models';


export const startGetCreditsMovieActive = ( id:number ) => {
    return async( dispatch:any ) => {
        try {
            const resp = await getCreditsMovie( id );
            
            dispatch( setCastActive( resp ) );

        } catch (error) {
            console.warn( error )
        }
    }
};

export const startGetSimilarActive = ( id:number, firstFetch?:boolean ) => {
    return async(dispatch:any) => {
        try {
            
            const resp = await getSimilarMovies( id );
           
            resp.length != 0 &&
                 firstFetch ? dispatch( setSimilarActive( resp ) )
                            : dispatch( addSimilarActive( resp ) )
            
        } catch (error) {
            console.warn( error );
        }
    }
}

export const startGetRecommendActive = ( id:number, firstFetch?:boolean ) => {
    return async(dispatch:any) => {
        try {
            
            const resp = await getRecommendMovies( id );
           
            resp.length != 0 &&
                 firstFetch ? dispatch( setRecommendActive( resp ) )
                            : dispatch( addRecommendActive( resp ) )
            
        } catch (error) {
            console.warn( error );
        }
    }
}

export const startGetDetaisActive = ( id:number ) => {
    return async( dispatch:any ) => {
        try {
            const resp = await getDetailsMovies( id );
            
            dispatch( setDetailsActive( resp ) );

        } catch (error) {
            console.warn( error )
        }
    }
};

export const setActiveMovie = ( payload:Movie ):Action => ({
    type: types.activeSetMovie,
    payload
});

const setCastActive = ( payload:Cast[] ):Action => ({
    type: types.activeSetCast,
    payload
});

const setSimilarActive = ( payload:Movie[] ):Action => ({
    type: types.activeSetSimilar,
    payload
});

const addSimilarActive = ( payload:Movie[] ):Action => ({
    type: types.activeAddSimilar,
    payload
});

const setRecommendActive = ( payload:Movie[] ):Action => ({
    type: types.activeSetRecommend,
    payload
});

const addRecommendActive = ( payload:Movie[] ):Action => ({
    type: types.activeAddRecommend,
    payload
});

const setDetailsActive = ( payload:DetailsModel ):Action => ({
    type: types.activeSetDetails,
    payload
});