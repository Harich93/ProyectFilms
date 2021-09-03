import { Movie, Cast } from '../Models/models';


export interface Action {
    type    : string,
    payload : any,
};

export interface MoviesRState {
    CinemaFilms   : Movie[]
    PopularFilms  : Movie[]
    UpcomingFilms : Movie[]
    SelectedFilm?  : Movie
};

export interface CastRState {
    CastMovieActive : Cast[]
}