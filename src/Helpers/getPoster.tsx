import { Movie } from "../types/Models/models";


export const getPoster = ( posterPath:string ):string => {
    if ( posterPath !=null ) return `https://image.tmdb.org/t/p/w500${ posterPath }`;
    else return 'https://static.thenounproject.com/png/3674269-200.png';
}

export const getBackdropPath = ( movie:Movie ):string => {
    if ( movie.backdrop_path !=null ) return `https://image.tmdb.org/t/p/w500${ movie.backdrop_path }`;
    else return getPoster( movie.poster_path );
}
