
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import {  setActiveMovie } from '../../Actions/activeActions';
import { getPoster } from '../../Helpers/getPoster';
import {  Movie, Serie } from '../../Types/Models/models';
import { RootState } from '../../Store/store';
import { iSearchRState } from '../../Types/interface/interfaces';
import { setActiveSerie } from '../../Actions/activeSerieActions';

interface iSearchCard {
    movie? : Movie
    serie? : Serie
}

export const SearchCard = ({ movie, serie }:iSearchCard) => {

    const { Find } = useSelector<RootState>(state => state.searchR ) as iSearchRState;
    const dispatch = useDispatch();

    const poster = getPoster( movie !== undefined ? movie.poster_path : serie!.poster_path );

    const handleOnClick = () => {
        Find === 'movie' 
         ? dispatch( setActiveMovie( movie! ) )
         : dispatch( setActiveSerie( serie! ) )
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
                        <h4>{ movie === undefined ? serie?.name : movie.title  }</h4>
                        <i className="far fa-star"> {  movie === undefined ? serie?.vote_average: movie.vote_average }</i>
                        <br />
                        <span>{ movie === undefined ? serie?.original_name : movie.original_title }</span>
                    </div>
                </div>
                
            </div>
        </Link>
    )
}
