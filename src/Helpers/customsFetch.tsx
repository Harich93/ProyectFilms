
import { CinemaModel, Movie } from '../Models/models';

const peticion = async( endpoint: string ):Promise<any> => {
    const res = await fetch(`https://api.themoviedb.org${endpoint}?api_key=48850b823f47e823c190a7f32e7f45de&language=es-ES&page=1`)
    const data = await res.json();

    return data;
}

export const getCinemaFilms = async():Promise<Movie[]> => {
    
    const data:CinemaModel = await peticion('/3/movie/now_playing')
    const movies:Movie[] = await data.results;

    return movies;
}

export const getPopularFilms = async():Promise<Movie[]> => {
    
    const data:CinemaModel = await peticion('/3/movie/popular')
    const movies:Movie[] = await data.results;

    return movies;
}