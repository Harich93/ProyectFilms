import { Action, ActiveRState } from '../Types/interface/interfaces';
import { types } from '../Types/types';

const initialState:ActiveRState = {
    ActiveCast   : [],
    ActiveImages : []
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
    
        
        default: return state;
    }
}