import '../../Sass/style.scss';

import {  useDispatch, useSelector } from 'react-redux';
import { startGetCinemaMovies, startGetPopularMovies } from '../../Actions/moviesActions';
import { getPoster } from '../../Helpers/getPoster';
import { RootState } from '../../Store/store';
import { useEffect } from 'react';
import { MoviesRState } from '../../Types/types';
import { SliderMovie } from '../Sliders/SliderMovie';


export const HomePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector<RootState>( state=> state.moviesR ) as MoviesRState;

  
  useEffect(() => {
    dispatch( startGetCinemaMovies() );
    dispatch( startGetPopularMovies() );
  }, [])

    return (
        <>
          <SliderMovie 
            title='En cines'
            items={ movies.CinemaFilms }
          />

          <SliderMovie 
            title='Populares'
            items={ movies.PopularFilms }
          />
        </>
    )
}
