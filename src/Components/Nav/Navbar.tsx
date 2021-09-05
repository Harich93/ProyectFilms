import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteResults } from '../../Actions/searchActions';
import { Seach } from '../Search/Seach'

export const Navbar = () => {
    const dispatch = useDispatch();

    return (
        
        <ul className="myNav animate__animated animate__fadeIn">
            <li className="myNav-item " onClick={ () => dispatch( deleteResults() ) }>
                <Link to="/films" className="nav-link">Peliculas</Link>
            </li>
            <li className="myNav-item">
                <Link to="/auth/login" className="nav-link" >Tv</Link>
            </li>

            <Link className="myNav-item" to='/search'>
                <div className='nav-link search'>
                    <Seach />
                </div>
            </Link>
        </ul>
  
    )
}
