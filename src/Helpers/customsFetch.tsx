import { Movie, MovieModel, Cast, CreditsModel, DetailsModel, SeriesModel, Serie, DetailsSerieModel, Season, WatchProviders } from '../types/Models/models';
import { Video, VideosModel } from '../types/interface/interfaces';

let pageCinema    = 0;
let pagePopular   = 0;
let pageUpcoming  = 0;

let pageOnAir    = 0;
let pagePopularSerie   = 0;


//=====================================
// Petición imagenes, videos, streaming 
//=====================================

export const getImgesActive= async( id:number, endpoint: 'movie' | 'tv'  ):Promise<any> => {

    const res = await fetch(`https://api.themoviedb.org/3/${endpoint}/${id}/images?api_key=48850b823f47e823c190a7f32e7f45de`)
    const data = await res.json();

    return data;
};

export const getVideosActive = async( id:number, endpoint: 'movie' | 'tv' ):Promise<Video[]> => {

    const data:VideosModel = await customFetch( `/3/${endpoint}/${id}/videos`);
    const videos = await data;

    return videos.results;
}


export const getWatchProvider = async( id:number, endpoint: 'movie' | 'tv' ) => {

    const data:WatchProviders = await customFetch( `/3/${endpoint}/${id}/watch/providers`);
    const wp = await data.results.ES;

    return wp;
}

//======================
//  Petición de busqueda
//======================

const customFetchSearch = async( typeSearch: 'movie' | 'tv', query:string , page:number = 1):Promise<any> => {

    const res = await fetch(`https://api.themoviedb.org/3/search/${typeSearch}?api_key=48850b823f47e823c190a7f32e7f45de&language=es-ES&page=${page}}&query=${query}`)
    const data = await res.json();

    return data;
};

export const getSeachMovies = async( query:string ):Promise<Movie[]> => {
    const resp:MovieModel = await customFetchSearch( 'movie', query );
    const data = resp.results

    return data;
};

export const getSeachSeries = async( query:string ):Promise<Movie[]> => {
    const resp:MovieModel = await customFetchSearch( 'tv', query );
    const data = resp.results

    return data;
};



//====================================
//  Peticiones Peliculas por categoria
//====================================

const customFetch = async( endpoint:string, page:number = 1 ):Promise<any> => {

    const res = await fetch(`https://api.themoviedb.org${endpoint}?api_key=48850b823f47e823c190a7f32e7f45de&language=es-ES&page=${page}`)
    const data = await res.json();

    return data;
};

export const getCinemaFilms = async():Promise<Movie[]> => {

    pageCinema++;

    const data:MovieModel = await customFetch('/3/movie/now_playing', pageCinema)

    if(pageCinema >= data.total_pages) 
        return []
    else {
        const movies:Movie[] = await data.results;
        return movies;
    }
};

export const getPopularFilms = async():Promise<Movie[]> => {
    pagePopular++;

    const data:MovieModel = await customFetch('/3/movie/popular', pagePopular);

    if(pagePopular >= data.total_pages) 
        return []
    else {
        const movies:Movie[] = await data.results;
        return movies;
    }
};

export const getUpcomingMovies = async():Promise<Movie[]> => {
    pageUpcoming++;

    const data:MovieModel = await customFetch('/3/movie/upcoming',pageUpcoming);

    if( pageUpcoming >= data.total_pages)
        return []
    else {
        const movies:Movie[] = await data.results;
        return movies;
    }
};

export const getCreditsMovie = async( id:number ):Promise<Cast[]> => {

    const data:CreditsModel = await customFetch(`/3/movie/${id}/credits`);
    const casts:Cast[] = await data.cast;  

    return casts;
};

export const getSimilarMovies = async( id:number ):Promise<Movie[]> => {

    const data:MovieModel = await customFetch( `/3/movie/${id}/similar`);
    const movies = await data.results;

    return movies;
}

export const getRecommendMovies = async( id:number ):Promise<Movie[]> => {

    const data:MovieModel = await customFetch( `/3/movie/${id}/recommendations`);
    const movies = await data.results;

    return movies;
}

export const getDetailsMovies = async( id:number ):Promise<DetailsModel> => {

    const data:DetailsModel = await customFetch( `/3/movie/${id}`);
    const details = await data;

    return details;
}




//==============
// Peticiones TV
//==============

export const getOnAirTv = async():Promise<Serie[]> => {

    const data:SeriesModel = await customFetch( `/3/tv/on_the_air`);
    const series = await data;

    return series.results;
}

export const getPopular = async():Promise<Serie[]> => {

    const data:SeriesModel = await customFetch( `/3/tv/popular`);
    const series = await data;

    return series.results;
}

export const getTop = async():Promise<Serie[]> => {

    const data:SeriesModel = await customFetch( `/3/tv/top_rated`);
    const series = await data;

    return series.results;
}


export const getSimilarSeries = async( id:number ):Promise<Serie[]> => {

    const data:SeriesModel = await customFetch( `/3/tv/${id}/similar`);
    const movies = await data.results;

    return movies;
}

export const getRecommendSeries = async( id:number ):Promise<Serie[]> => {

    const data:SeriesModel = await customFetch( `/3/tv/${id}/recommendations`);
    const movies = await data.results;

    return movies;
}

export const getDetailsSeries = async( id:number ):Promise<DetailsSerieModel> => {

    const data:DetailsSerieModel = await customFetch( `/3/tv/${id}`);
    const details = await data;

    return details;
}

export const getCreditsSeries = async( id:number ):Promise<Cast[]> => {

    const data:CreditsModel = await customFetch(`/3/tv/${id}/credits`);
    const casts:Cast[] = await data.cast;  

    return casts;
};

// export const getSeasonSeries = async( idSerie:number, idSeason:number ):Promise<Cast[]> => {

//     const data:Season = await customFetch(`/3/tv/${idSerie}/season/${idSerie}`);
//     const casts = await data;  

//     return casts;
// };




