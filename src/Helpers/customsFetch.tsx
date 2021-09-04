import { Movie, MovieModel, Cast, CreditsModel } from '../Types/Models/models';

let pageCinema    = 0;
let pagePopular   = 0;
let pageUpcoming  = 0;





//======================
//  Petición de busqueda
//======================

const customFetchSearch = async( typeSearch: 'movie' | 'multi', query:string , page:number = 1 ):Promise<any> => {

    const res = await fetch(`https://api.themoviedb.org/3/search/${typeSearch}?api_key=48850b823f47e823c190a7f32e7f45de&language=es-ES&page=${page}&query=${query}`)
    const data = await res.json();

    return data;
};

export const getSeachMovies = async( query:string ):Promise<Movie[]> => {
    const resp:MovieModel = await customFetchSearch( 'movie', query );
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

export const getCreditsMovie = async( id:number ) => {

    const data:CreditsModel = await customFetch(`/3/movie/${id}/credits`);
    const casts:Cast[] = await data.cast;  

    return casts;
};


