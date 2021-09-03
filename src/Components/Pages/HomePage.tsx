import '../../Sass/style.scss';

import { useEffect } from 'react';
import { RootState } from '../../Store/store';
import {  useDispatch, useSelector } from 'react-redux';

import { startGetCinemaMovies, startGetPopularMovies, startGetUpcomingMovies } from '../../Actions/moviesActions';
import { SliderMovie } from '../Sliders/SliderMovie';
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

          <SliderMovie 
            title='En cines'
            items={ movies.CinemaFilms }
          />

          <SliderMovie 
            title='Populares'
            items={ movies.PopularFilms }
          />

          <SliderMovie 
            title='Próximamente'
            items={ movies.UpcomingFilms }
          />

        </>
    )
}
