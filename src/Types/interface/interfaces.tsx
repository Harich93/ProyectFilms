import { Movie, DetailsModel, Cast } from '../Models/models';


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
    ActiveCast      : Cast[]
    ActiveSimilar   : Movie[]
    ActiveRecommend : Movie[]
    ActiveDetails?  : DetailsModel
    ActiveVideos?   : Video[] 
}

export interface iLoadRState {
    Loading : boolean
}

export interface iSearchRState {
    Results : Movie[]
}

export interface VideosModel {
    id:      number;
    results: Video[];
}

export interface Video {
    iso_639_1:    string;
    iso_3166_1:   string;
    name:         string;
    key:          string;
    published_at: Date;
    site:         string;
    size:         number;
    type:         string;
    official:     boolean;
    id:           string;
}
