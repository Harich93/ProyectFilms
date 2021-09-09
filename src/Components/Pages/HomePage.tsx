import '../../Sass/style.scss';

import { useEffect } from 'react';
import { RootState } from '../../store/store';
import {  useDispatch, useSelector } from 'react-redux';

import { Slider } from '../sliders/Slider';
import { ItemSliderMovie } from '../sliders/ItemSliderMovie';
import { MoviesRState } from '../../types/interface/interfaces';

import { startGetCinemaMovies, startGetPopularMovies, startGetUpcomingMovies } from '../../actions/moviesActions';


export const HomePage = () => {

  const dispatch = useDispatch();
  const movies = useSelector<RootState>( state=> state.moviesR ) as MoviesRState;


  useEffect(() => {

    if( movies.CinemaFilms.length  === 0 ) {
      dispatch( startGetCinemaMovies( true ) );
      dispatch( startGetPopularMovies( true) );
      dispatch( startGetUpcomingMovies( true ) );
    }


  }, [movies, dispatch]);

    return (
      <>
            <Slider
              component={ <ItemSliderMovie movies={ movies.UpcomingFilms } /> }
              componentStyle='poster'
              title='Próximamente'
              items={ movies.UpcomingFilms }
              funInfiniteScroll={ startGetUpcomingMovies( false ) }
            />

            <Slider
              component={ <ItemSliderMovie movies={ movies.CinemaFilms } />}
              componentStyle='poster'
              title='En cines'
              items={ movies.CinemaFilms }
              funInfiniteScroll={ startGetCinemaMovies( false ) }

            />
  
            <Slider
              component={ <ItemSliderMovie movies={ movies.PopularFilms } /> }
              componentStyle='poster'
              title='Populares'
              items={ movies.PopularFilms }
              funInfiniteScroll={ startGetPopularMovies( false ) }
            />

        </>
    )
}
