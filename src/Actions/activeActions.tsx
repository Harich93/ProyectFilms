import { getCreditsMovie, getDetailsMovies, getImgesActive, getRecommendMovies, getSimilarMovies, getVideosActive } from '../Helpers/customsFetch';
import { Action, Video } from '../Types/interface/interfaces';
import { types } from "../Types/types";
import { Cast, Movie, DetailsModel, ImagesModel } from '../Types/Models/models';
import { setLoadingTrue, setLoadingFalse } from '../Actions/loadActions';


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
            
            const resp = await getVideosActive( id, 'movie' );
            dispatch( setVideosActive( resp ) );

        } catch (error) {
            console.warn(  error );
        }
    }
}

export const startGetImagesMovieActive = ( id:number ) => {
    return async( dispatch:any ) => {
        try {
            
            const resp = await getImgesActive( id, 'movie' );
            dispatch( setImagesActive( resp ) );

            dispatch( setLoadingFalse() );

        } catch (error) {
            console.warn( error );
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

const setImagesActive = ( payload:ImagesModel ):Action => ({
    type: types.activeSetImages,
    payload
});


