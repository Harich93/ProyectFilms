import { Movie, Cast } from '../Models/models';


export interface Action {
    type    : string,
    payload : any,
};

export interface MoviesRState {
    CinemaFilms   : Movie[]
    PopularFilms  : Movie[]
    UpcomingFilms : Movie[]
};

export interface ActiveRState {
    ActiveMovie? : Movie
    ActiveCast   : []
    ActiveImages : []
}