import {  getCreditsSeries, getDetailsMovies, getDetailsSeries, getImgesActive, getRecommendMovies, getRecommendSeries, getSimilarMovies, getSimilarSeries, getVideosActive } from '../helpers/customsFetch';
import { Action, Video } from '../types/interface/interfaces';
import { types } from "../types/types";
import { Cast, Serie, DetailsModel, ImagesModel, DetailsSerieModel, Season } from '../types/Models/models';
import { setLoadingTrue, setLoadingFalse } from './loadActions';


export const startGetCreditsSerieActive = ( id:number ) => {
    return async( dispatch:any ) => {
        try {
            dispatch( setLoadingTrue() );
        
            const resp = await getCreditsSeries( id );

            dispatch( setCastSerie( resp ) );
            dispatch( setLoadingFalse() );

        } catch (error) {
            console.warn( error )
        }
    }
};

export const startGetSimilarSerieActive = ( id:number, firstFetch:boolean = true ) => {
    return async(dispatch:any) => {
        try {
            
            const resp = await getSimilarSeries( id );
           
            resp.length !== 0 &&
                 firstFetch ? dispatch( setSimilarSerie( resp ) )
                            : dispatch( addSimilarSerie( resp ) )
            
        } catch (error) {
            console.warn( error );
        }
    }
}

export const startGetRecommendSerieActive = ( id:number, firstFetch:boolean = true ) => {
    return async(dispatch:any) => {
        try {
            
            const resp = await getRecommendSeries( id );
           
            resp.length !== 0 &&
                 firstFetch ? dispatch( setRecommendSerie( resp ) )
                            : dispatch( addRecommendSerie( resp ) )
                
        } catch (error) {
            console.warn( error );
        }
    }
}

export const startGetDetailsSerieActive = ( id:number ) => {
    return async( dispatch:any ) => {
        try {
            const resp = await getDetailsSeries( id );
            
            dispatch( setDetailsSerie( resp ) );

        } catch (error) {
            console.warn( error )
        }
    }
};

export const startGetVideosSerieActive = ( id:number ) => {
    return async( dispatch:any ) => {
        try {
            
            const resp = await getVideosActive( id, 'tv' );
            dispatch( setVideosSerie( resp ) );

        } catch (error) {
            console.warn(  error );
        }
    }
}

export const startGetImagesSerieActive = ( id:number ) => {
    return async( dispatch:any ) => {
        try {
            
            const resp = await getImgesActive( id, 'tv' );
            dispatch( setImagesSerie( resp ) );

            dispatch( setLoadingFalse() );

        } catch (error) {
            console.warn( error );
        }
    }
}

export const setActiveSerie = ( payload:Serie ):Action => ({
    type: types.activeSetSerie,
    payload
});

const setSeasonSerie = ( payload:Season[] ):Action => ({
    type: types.activeSetSeasonSerie,
    payload
});

const setCastSerie = ( payload:Cast[] ):Action => ({
    type: types.activeSetCastSerie,
    payload
});

const setSimilarSerie = ( payload:Serie[] ):Action => ({
    type: types.activeSetSimilarSerie,
    payload
});

const addSimilarSerie = ( payload:Serie[] ):Action => ({
    type: types.activeAddSimilarSerie,
    payload
});

const setRecommendSerie = ( payload:Serie[] ):Action => ({
    type: types.activeSetRecommendSerie,
    payload
});

const addRecommendSerie = ( payload:Serie[] ):Action => ({
    type: types.activeAddRecommendSerie,
    payload
});

const setDetailsSerie = ( payload:DetailsSerieModel ):Action => ({
    type: types.activeSetDetailsSerie,
    payload
});

const setVideosSerie = ( payload:Video[] ):Action => ({
    type: types.activeSetVideosSerie,
    payload
});

const setImagesSerie = ( payload:ImagesModel ):Action => ({
    type: types.activeSetImagesSerie,
    payload
});
