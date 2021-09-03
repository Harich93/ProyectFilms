import { Movie } from "../Models/models"

export const types = {
    moviesSetCinemaMovies  : '[movies] Set cinema movies',
    moviesAddCinemaMovies  : '[movies] Add cinemaMovies',
    moviesSetPopularMovies : '[movies] Set popular Movies',
    moviesAddPopularMovies : '[movies] Add popular Movies',
}

export type Action = {
    type    : string,
    payload : any,
}

export type MoviesRState = {
    CinemaFilms : Movie[]
    PopularFilms: Movie[]
}