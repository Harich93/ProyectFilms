import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Movie, Serie } from '../../types/Models/models';
import { getPoster } from '../../helpers/getPoster';
import { setActiveMovie } from '../../actions/activeActions';
import { ReactElement } from 'react';



interface iItemSliderMovie {
    movies : Movie[]
};

export const ItemSliderMovie = ( { movies }:iItemSliderMovie ):ReactElement => {

    const dispatch = useDispatch();

    const handleOnClick = ( movie:Movie) => {

        dispatch( setActiveMovie( movie ) );
    } 

    return (

        <>
            { 
                movies.map( movie => (
                    
                    <Link key={movie.id} to='/details'>
                        <div 
                            className='slider-item' 
                            style={{ backgroundImage: `url(${getPoster( movie.poster_path )})` }}
                            onClick={ () => handleOnClick(movie) }
                        >
                            <div className='col-4' >

                            </div>
                            <div className='slider-item-description col-8 animate__animated animate__fadeIn'>
                                <div className='slider-item-title'>
                                    <h3>{ movie.title }</h3>
                                    <i className="far fa-star"> {movie.vote_average}</i>
                                </div>
                                <span>{ movie.overview }</span>
                            </div>
                            
                        </div>
                    </Link>

                ))
            }
        
        </>
    )
}
