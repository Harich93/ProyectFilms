import { getCreditsMovie, getDetailsMovies, getRecommendMovies, getSimilarMovies, getVideosMovies } from '../helpers/customsFetch';
import { Action, Video } from '../types/interface/interfaces';
import { types } from "../types/types";
import { Cast, Movie, DetailsModel } from '../types/Models/models';
import { setLoadingTrue, setLoadingFalse } from './loadActions';


export const startGetCreditsMovieActive = ( id:number ) => {
    return async( dispatch:any ) => {
        try {
            dispatch( setLoadingTrue() );
        
            const resp = await getCreditsMovie( id );
            
            dispatch( setCastActive( resp ) );

        } catch (error) {
            console.warn( error )
        }
    }
};

export const startGetSimilarActive = ( id:number, firstFetch:boolean = true ) => {
    return async(dispatch:any) => {
        try {
            
            const resp = await getSimilarMovies( id );
           
            resp.length !== 0 &&
                 firstFetch ? dispatch( setSimilarActive( resp ) )
                            : dispatch( addSimilarActive( resp ) )
            
        } catch (error) {
            console.warn( error );
        }
    }
}

export const startGetRecommendActive = ( id:number, firstFetch:boolean = true ) => {
    return async(dispatch:any) => {
        try {
            
            const resp = await getRecommendMovies( id );
           
            resp.length !== 0 &&
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

export const startGetVideosActive = ( id:number ) => {
    return async( dispatch:any ) => {
        try {
            
            const resp = await getVideosMovies( id );
            dispatch( setVideosActive( resp ) );

            dispatch( setLoadingFalse() );

        } catch (error) {
            
        }
    }
}

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

const setVideosActive = ( payload:Video[] ):Action => ({
    type: types.activeSetVideos,
    payload
});

