import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteResults } from '../../actions/searchActions';
import { Seach } from '../search/Seach'

export const Navbar = () => {
    const dispatch = useDispatch();

    return (
        
        <ul className="myNav animate__animated animate__fadeIn">
            <li className="myNav-item " onClick={ () => dispatch( deleteResults() ) }>
                <Link to="/films" className="nav-link">Peliculas</Link>
            </li>
            <li className="myNav-item">
                <Link to="/series" className="nav-link" >Series</Link>
            </li>

            <Link className="myNav-item item-search" to='/search'>
                <div className='nav-link search'>
                    <Seach />
                </div>
            </Link>
        </ul>
  
    )
}
