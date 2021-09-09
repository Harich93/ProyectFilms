import { Action } from '../types/interface/interfaces';
import { types } from '../types/types';

export const modalSetOpenTrue = ():Action => ({
    type: types.modalSetOpenTrue
});

export const modalSetOpenFalse = ():Action => ({
    type: types.modalSetOpenfalse
})

export const modalSetVideo = ( payload:string ):Action => ({
    type: types.modalSetVideo,
    payload
})