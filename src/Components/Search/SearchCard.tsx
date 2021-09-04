
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { setActiveMovie } from '../../Actions/activeActions';
import { getPoster } from '../../Helpers/getPoster';
import { Movie } from '../../Types/Models/models';

interface iSearchCard {
    movie:Movie
}

export const SearchCard = ({ movie }:iSearchCard) => {

    const dispatch = useDispatch();
    const poster = getPoster( movie.poster_path );

    const handleOnClick = () => {
        dispatch( setActiveMovie( movie ) );
    } 
    
    return (
        <Link to='/details'>
            <div 
                className='search-card' 
                style={{ backgroundImage: `url(${poster})` }}
                onClick={ handleOnClick }
            >
                <div className='search-card-description animate__animated animate__fadeIn'>
                    <div className='search-card-title animate__animated animate__fadeIn'>
                        <h4>{ movie.title }</h4>
                        <i className="far fa-star"> {movie.vote_average}</i>
                        <br />
                        <span>{ movie.original_title }</span>
                    </div>
                </div>
                
            </div>
        </Link>
    )
}
