import { Action } from '../types/interface/interfaces';
import { types } from '../types/types';


export const setLoadingTrue = ():Action => ({
    type: types.loadSetTrue,
});

export const setLoadingFalse = ():Action => ({
    type: types.loadSetFalse,
});