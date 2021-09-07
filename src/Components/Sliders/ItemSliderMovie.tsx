import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Movie } from '../../Types/Models/models';
import { getPoster } from '../../Helpers/getPoster';
import { setActiveMovie } from '../../Actions/activeActions';



export interface ItemSlider {
    movie : Movie
};

export const ItemSliderMovie = ( { movie }:ItemSlider) => {

    const dispatch = useDispatch();
    const poster = getPoster( movie.poster_path );

    const handleOnClick = () => {
        dispatch( setActiveMovie( movie ) );
    } 

    return (
        <Link to='/details'>
            <div 
                className='slider-item' 
                style={{ backgroundImage: `url(${poster})` }}
                onClick={ handleOnClick }
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
    )
}
