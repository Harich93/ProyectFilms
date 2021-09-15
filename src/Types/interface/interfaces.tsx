import { Cast, DetailsModel, DetailsSerieModel, ImagesModel, Movie, Season, Serie, WatchProviders, Ar } from '../Models/models';



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
    ActiveMovie?         : Movie
    ActiveCast           : Cast[]
    ActiveSimilar        : Movie[]
    ActiveRecommend      : Movie[]
    ActiveDetails?       : DetailsModel
    ActiveVideos?        : Video[]
    ActiveImages?        : ImagesModel
    ActiveWP?            : WatchProviders

}


export interface ModalRState {
    ModalOpen  : boolean
    ModalVideo : string
}

export interface iLoadRState {
    Loading : boolean
}

export interface iSearchRState {
    Results : Movie[]
    Find    : 'movie' | 'tv'
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

export interface iSeriesRState {
    SeriesOnAir     : Serie[]
    SeriesPopular   : Serie[]
    SeriesTop       : Serie[]
}

export interface iActiveSerieRState {
    ActiveSerie?              : Serie
    ActiveSerieCast           : Cast[]
    ActiveSerieSimilar        : Serie[]
    ActiveSerieRecommend      : Serie[]
    ActiveSerieDetails?       : DetailsSerieModel
    ActiveSerieVideos?        : Video[]
    ActiveSerieImages?        : ImagesModel
    ActiveSeasons?            : Season[]
    ActiveWPSerie?            : Ar
}
