import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        
        <ul className="myNav">
            <li className="myNav-item">
                <Link to="/films" className="nav-link">Peliculas</Link>
            </li>
            <li className="myNav-item">
                <Link to="/auth/login" className="nav-link" >Series</Link>
            </li>

            <li className="myNav-item">
                <a className="nav-link disabled" href="#" aria-disabled="true">Disabled</a>
            </li>
        </ul>
  
    )
}
