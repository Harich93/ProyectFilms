import { getCreditsMovie } from "../Helpers/customsFetch"
import { Action } from "../Types/interface/interfaces";
import { types } from "../Types/types";
import { Cast, Movie } from '../Types/Models/models';


export const startGetCreditsMovieActive = ( id:number ) => {
    return async( dispatch:any ) => {
        try {
            const resp = await getCreditsMovie( id );
            dispatch( setCastActive( resp ) );

        } catch (error) {
            console.warn( error )
        }
    }
};

export const setActiveMovie = ( payload:Movie ):Action => ({
    type: types.activeSetMovie,
    payload: payload
});

const setCastActive = ( payload:Cast[] ):Action => ({
    type: types.activeSetCast,
    payload: payload
});