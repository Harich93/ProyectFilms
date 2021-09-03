import { Link } from 'react-router-dom'
import { useForm } from '../../Hooks/useForm';





export const Navbar = () => {

    const [ values, handleInputChange ] = useForm({ title: '' });

    const { title } = values;

    return (
        
        <ul className="myNav">
            <li className="myNav-item">
                <Link to="/films" className="nav-link">Peliculas</Link>
            </li>
            <li className="myNav-item">
                <Link to="/auth/login" className="nav-link" >Series</Link>
            </li>

            <li className="myNav-item">
                <i className="fas fa-search nav-link" style={{ fontSize: 11}}>
                    <input 
                        className='nav-search ms-3'
                        type='text'
                        placeholder='Buscar...'
                        name='title'
                        value={title}
                        onChange={ handleInputChange }
                        autoComplete='off'
                    />
                </i>
            </li>
        </ul>
  
    )
}
