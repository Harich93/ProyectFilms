import { Action, ActiveRState } from '../types/interface/interfaces';
import { types } from '../types/types';

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

        
        default: return state;
    }
}