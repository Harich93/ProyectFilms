import { getOnAirTv, getTop, getPopular } from '../Helpers/customsFetch';
import { Serie } from "../Types/Models/models";
import { Action } from '../Types/interface/interfaces';
import { types } from '../Types/types';


export const startGetOnAirSeries = ( firstFetch:boolean = false ) => {
    return async( dispatch:any ) => {
        try {
            const resp = await getOnAirTv();

            if(resp.length === 0 ) return
            
            else firstFetch ? dispatch( setOnAirSeries( resp ) )
                            : dispatch( addOnAirSeries( resp ) )
                
        } catch (error) { console.log( error ); }
    }
};

export const startGetTopSeries = ( firstFetch:boolean = false ) => {
    return async( dispatch:any ) => {
        try {
            const resp = await getTop();

            if(resp.length === 0 ) return
            
            else firstFetch ? dispatch( setTopSeries( resp ) )
                            : dispatch( addTopSeries( resp ) )
                
        } catch (error) { console.log( error ); }
    }
};

export const startGetPopularSeries = ( firstFetch:boolean = false ) => {
    return async( dispatch:any ) => {
        try {
            const resp = await getPopular();

            if(resp.length === 0 ) return
            
            else firstFetch ? dispatch( setPopularSeries( resp ) )
                            : dispatch( addPopularSeries( resp ) )
                
        } catch (error) { console.log( error ); }
    }
};


const setOnAirSeries = ( payload:Serie[] ):Action => ({
    type: types.seriesSetOnAir,
    payload
});

const addOnAirSeries = ( payload:Serie[] ):Action => ({
    type: types.seriesAddOnAir,
    payload
});

const setTopSeries = ( payload:Serie[] ):Action => ({
    type: types.seriesSetTop,
    payload
});

const addTopSeries = ( payload:Serie[] ):Action => ({
    type: types.seriesAddTop,
    payload
});

const setPopularSeries = ( payload:Serie[] ):Action => ({
    type: types.seriesSetPopular,
    payload
});

const addPopularSeries = ( payload:Serie[] ):Action => ({
    type: types.seriesAddPopular,
    payload
});




