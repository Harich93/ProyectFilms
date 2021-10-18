import { Action, iSeriesRState } from "../Types/interface/interfaces"
import { types } from '../Types/types';

const initialState:iSeriesRState = {
    SeriesOnAir     : [],
    SeriesPopular   : [],
    SeriesTop       : [],
}

export const seriesReducer = ( state = initialState, action:Action ) => {

    switch ( action.type ) {
        case types.seriesSetOnAir:
            return { 
                ...state,
                SeriesOnAir: action.payload
            }   
        case types.seriesAddOnAir: 
            return {
                ...state,
                SeriesOnAir : [ ...state.SeriesOnAir, ...action.payload ]
            }


        case types.seriesSetPopular:
            return { 
                ...state,
                SeriesPopular: action.payload
            } 
        case types.seriesAddPopular: 
            return {
                ...state,
                SeriesPopular : [ ...state.SeriesPopular, ...action.payload ]
            }


        case types.seriesSetTop:
            return { 
                ...state,
                SeriesTop: action.payload
            }      
        case types.seriesAddTop: 
            return {
                ...state,
                SeriesTop : [ ...state.SeriesTop, ...action.payload ]
            }
    

    
        default: return state;

    }
}