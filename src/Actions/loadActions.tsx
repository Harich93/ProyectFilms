import { Action } from '../Types/interface/interfaces';
import { types } from '../Types/types';


export const setLoadingTrue = ():Action => ({
    type: types.loadSetTrue,
});

export const setLoadingFalse = ():Action => ({
    type: types.loadSetFalse,
});