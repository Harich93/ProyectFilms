import { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Movie } from '../../Types/Models/models';
import { getPoster } from '../../Helpers/getPoster';
import { setActiveMovie } from '../../Actions/activeActions';



interface iItemSliderMovie {
    movies : Movie[]
};

export const ItemSliderMovie = ( { movies }:iItemSliderMovie ):ReactElement => {

    const dispatch = useDispatch();

    const handleOnClick = ( movie:Movie) => {

        localStorage.setItem('activeMovie', JSON.stringify(movie))
        dispatch( setActiveMovie( movie ) );
    } 

    return (

        <>
            { 
                movies.map( movie => (
                    
                    <Link key={movie.id} to='/details'>
                        <div 
                            className='card' 
                            style={{ backgroundImage: `url(${getPoster( movie.poster_path )})` }}
                            onClick={ () => handleOnClick(movie) }
                        >
                            <div className='col-4' >

                            </div>
                            <div className='card-description col-8 animate__animated animate__fadeIn'>
                                <div className='card-title'>
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
