import { Action, iSearchRState } from '../Types/interface/interfaces';
import { types } from "../Types/types";


const initialState: iSearchRState = {
    Results: []
}

export const searchReducer = ( state = initialState, action:Action ) => {

    switch (action.type) {
        case types.searchSetResults:
            return {
                ...state,
                Results: action.payload
            }
        
        case types.searchDeleteResults:
            return{
                ...state,
                Results: []
            }
    
        default: return state;
    }
}