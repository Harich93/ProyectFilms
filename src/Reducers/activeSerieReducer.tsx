import { Action, iActiveSerieRState } from "../types/interface/interfaces";

 const initialState:iActiveSerieRState = {
    ActiveSeerieCast : [],
    ActiveSerieRecommend: [],
    ActiveSerieSimilar : [],  
 }
 
 export const nameReducer = ( state = initialState, action:Action ) => {
    switch ( action.type) {
        // case value:
            
        //     break;
    
        default: return state
    }
 }