import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { Seach } from '../search/Seach';
import { iSearchRState } from '../../types/interface/interfaces';
import { RootState } from '../../store/store';
import { deleteResults } from '../../actions/searchActions';

export const Navbar = () => {
    const dispatch = useDispatch();
    const {Find} = useSelector<RootState>( state => state.searchR ) as iSearchRState

    const resultsDelete = () => {
        dispatch( deleteResults() );
    };

    return (
        
        <ul className="myNav animate__animated animate__fadeIn">
            <li className="myNav-item" onClick={ resultsDelete }>
                <Link to="/films" className="nav-link" >Peliculas</Link>
            </li>
            <li className="myNav-item" onClick={ resultsDelete }>
                <Link to="/series" className="nav-link">Series</Link>
            </li>

            <Link className="myNav-item item-search" to='/search'>
                <div className='nav-link search'>
                    <Seach find={Find} />
                </div>
            </Link>
        </ul>
  
    )
}
