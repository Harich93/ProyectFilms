import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteResults } from '../../Actions/searchActions';
import { Seach } from '../Search/Seach'


export const Navbar = () => {

    const dispatch = useDispatch();

    return (
        
        <ul className="myNav">
            <li className="myNav-item " onClick={ () => dispatch( deleteResults() ) }>
                <Link to="/films" className="nav-link">Peliculas</Link>
            </li>
            <li className="myNav-item">
                <Link to="/auth/login" className="nav-link" >Series</Link>
            </li>

            <li className="myNav-item">
                <div className='nav-link'>
                    <Seach />
                </div>
            </li>
        </ul>
  
    )
}
