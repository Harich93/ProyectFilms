import { Movie } from "../Types/Models/models";


export const getPoster = ( posterPath:string ):string => {
    if ( posterPath !=null ) return `https://image.tmdb.org/t/p/w500${ posterPath }`;
    else return 'https://i.stack.imgur.com/GNhxO.png';
}

export const getBackdropPath = ( movie:Movie ):string => {
    if ( movie.backdrop_path !=null ) return `https://image.tmdb.org/t/p/w500${ movie.backdrop_path }`;
    else return getPoster( movie.poster_path );
}