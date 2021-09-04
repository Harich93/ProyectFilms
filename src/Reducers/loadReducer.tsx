import { Action, iLoadRState } from '../Types/interface/interfaces';
import { types } from '../Types/types';

const initialState:iLoadRState = {
    Loading : false 
}

export const loadReducer = ( state = initialState, action:Action ) => {

    switch (action.type) {
        case types.loadSetTrue:
            return {
                ...state,
                Loading: true 
            }

        case types.loadSetFalse:
            return {
                ...state,
                Loading: false
            }
    
        default: return state;
    }
}