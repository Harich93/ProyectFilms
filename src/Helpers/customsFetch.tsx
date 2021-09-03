import { Movie, MovieModel, Cast, CreditsModel } from '../Types/Models/models';



const customFetch = async( endpoint:string, page:number = 1 ):Promise<any> => {

    const res = await fetch(`https://api.themoviedb.org${endpoint}?api_key=48850b823f47e823c190a7f32e7f45de&language=es-ES&page=${page}`)
    const data = await res.json();

    return data;
};

export const getCinemaFilms = async():Promise<Movie[]> => {
    
    const data:MovieModel = await customFetch('/3/movie/now_playing')
    const movies:Movie[] = await data.results;

    return movies;
};

export const getPopularFilms = async():Promise<Movie[]> => {
    
    const data:MovieModel = await customFetch('/3/movie/popular')
    const movies:Movie[] = await data.results;

    return movies;
};

export const getUpcomingMovies = async():Promise<Movie[]> => {

    const data:MovieModel = await customFetch('/3/movie/upcoming');
    const movies:Movie[] = await data.results;

    return movies;
};

export const getCreditsMovie = async( id:number ) => {

    const data:CreditsModel = await customFetch(`/3/movie/${id}/credits`);
    const casts:Cast[] = await data.cast;  

    return casts;
}