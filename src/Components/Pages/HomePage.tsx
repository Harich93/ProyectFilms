import '../../Sass/style.scss';

import { useEffect } from 'react';
import { RootState } from '../../Store/store';
import {  useDispatch, useSelector } from 'react-redux';

import { startGetCinemaMovies, startGetPopularMovies, startGetUpcomingMovies } from '../../Actions/moviesActions';
import {  Slider } from '../Sliders/Slider';
import { MoviesRState } from '../../Types/interface/interfaces';


export const HomePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector<RootState>( state=> state.moviesR ) as MoviesRState;

  
  useEffect(() => {
    dispatch( startGetCinemaMovies() );
    dispatch( startGetPopularMovies() );
    dispatch( startGetUpcomingMovies() );
  }, [])

    return (
        <>

          <Slider
            component='movies'
            title='En cines'
            items={ movies.CinemaFilms }
          />

          <Slider
            component='movies'
            title='Populares'
            items={ movies.PopularFilms }
          />

          <Slider
            component='movies'
            title='Próximamente'
            items={ movies.UpcomingFilms }
          />

        </>
    )
}
