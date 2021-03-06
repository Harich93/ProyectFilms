import { Action, ActiveRState } from '../Types/interface/interfaces';
import { types } from '../Types/types';

const initialState:ActiveRState = {
    ActiveCast      : [],
    ActiveSimilar   : [],
    ActiveRecommend : [],
    ActiveVideos    : [],
}

export const activeReducer = ( state = initialState, action:Action) => {

    switch (action.type) {
        case types.activeSetCast:
           return {
                ...state,
                ActiveCast: action.payload
           }

        case types.activeSetMovie:
            return {
                ...state,
                ActiveMovie: action.payload
            }
        
        case types.activeSetSimilar:
            return{
                ...state,
                ActiveSimilar: action.payload
            }

        case types.activeAddSimilar:
            return {
                ...state,
                ActiveSimilar: [ ...state.ActiveSimilar, ...action.payload ]
            }

        case types.activeSetRecommend:
            return{
                ...state,
                ActiveRecommend: action.payload
            }

        case types.activeAddRecommend:
            return {
                ...state,
                ActiveRecommend: [ ...state.ActiveRecommend, ...action.payload ]
            }

        case types.activeSetDetails:
            return {
                ...state,
                ActiveDetails: action.payload
            }

        case types.activeSetVideos:
            return {
                ...state,
                ActiveVideos: action.payload
            }

        case types.activeSetImages:
            return {
                ...state,
                ActiveImages: action.payload
            }

        case types.activeSetWatchProviders:
            return {
                ...state,
                ActiveWP: action.payload
            }

        
        default: return state;
    }
}