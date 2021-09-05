import '../../Sass/style.scss';

import { useEffect } from 'react';
import { RootState } from '../../Store/store';
import {  useDispatch, useSelector } from 'react-redux';

import { startGetCinemaMovies, startGetPopularMovies, startGetUpcomingMovies } from '../../Actions/moviesActions';
import {  Slider } from '../Sliders/Slider';
import { iLoadRState, MoviesRState, iSearchRState } from '../../Types/interface/interfaces';
import { SearchResults } from '../Search/SearchResults';
import { Snniper } from '../Snniper/Snniper';


export const HomePage = () => {

  const dispatch = useDispatch();
  const movies = useSelector<RootState>( state=> state.moviesR ) as MoviesRState;
  const { Loading } = useSelector<RootState>( state => state.loadR ) as iLoadRState;
  const { Results } = useSelector<RootState>( state => state.searchR ) as iSearchRState;


  useEffect(() => {
    if( movies.CinemaFilms.length  === 0 ) {
      dispatch( startGetCinemaMovies( true ) );
      dispatch( startGetPopularMovies( true) );
      dispatch( startGetUpcomingMovies( true ) );
    }
  }, []);

  
  const sliderMovies = () => {
    return (
      <>
            <Slider
              component='movies'
              title='Próximamente'
              items={ movies.UpcomingFilms }
              functionDispatch='upcoming'
            />

            <Slider
              component='movies'
              title='En cines'
              items={ movies.CinemaFilms }
              functionDispatch='cinema'

            />
  
            <Slider
              component='movies'
              title='Populares'
              items={ movies.PopularFilms }
              functionDispatch='popular'
            />

        </>
    )
  }


    return (
        <>
          {
            Loading ? <Snniper />
                    : Results.length > 0 
                        ?  <SearchResults /> 
                        :  sliderMovies()     
          }
        </>
    )
}
