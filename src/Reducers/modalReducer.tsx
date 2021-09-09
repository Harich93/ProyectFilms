import { Action, ModalRState } from "../types/interface/interfaces"
import { types } from "../types/types";

const initialState:ModalRState = {
    ModalOpen  : false,
    ModalVideo :  ''
}

export const modalReducer = ( state = initialState, action:Action ) => {

    switch ( action.type ) {
        case types.modalSetOpenTrue:
            return {
                ...state,
                ModalOpen: true
            }
        
        case types.modalSetOpenfalse:
            return {
                ModalOpen: false
            }

        case types.modalSetVideo:
            return {
                ...state,
                ModalVideo: action.payload
            }
    
        default: return state;
    }
}