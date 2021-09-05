import { Movie, DetailsModel } from '../Models/models';


export interface Action {
    type     : string,
    payload? : any,
};

export interface MoviesRState {
    CinemaFilms   : Movie[]
    PopularFilms  : Movie[]
    UpcomingFilms : Movie[]
};

export interface ActiveRState {
    ActiveMovie?    : Movie
    ActiveCast      : []
    ActiveSimilar   : Movie[]
    ActiveRecommend : Movie[]
    ActiveDetails?  : DetailsModel
}

export interface iLoadRState {
    Loading : boolean
}

export interface iSearchRState {
    Results : Movie[]
}