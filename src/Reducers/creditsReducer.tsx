import { Action, CastRState } from '../Types/interface/interfaces';
import { types } from '../Types/types';

const initialState:CastRState = {
    CastMovieActive : []
}

export const creditsReducer = ( state = initialState, action:Action) => {

    switch (action.type) {
        case types.castSetCastMovieActive:
           return {
                ...state,
                CastMovieActive: action.payload
           }
    
        
        default: return state;
    }
}