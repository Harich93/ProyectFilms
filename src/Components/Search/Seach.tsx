import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteResults, startGetSearchMovies } from "../../actions/searchActions";
import { useForm } from "../../hooks/useForm";


export const Seach = () => {

    const dispatch = useDispatch();

    const [ values, handleInputChange, reset] = useForm({ query: '' });
    const { query } = values ;

    const [view, setView] = useState(true);

    useEffect(() => {
        if (query.length > 2) {
                dispatch( startGetSearchMovies( query ));
                setView( false );
        }
        else {
                dispatch( deleteResults() );
                setView( true );
        }
    }, [ query, dispatch])



    return (
        <div className='search-frame'>
            <i 
                className="fas fa-search" 
                style={{ fontSize: 13}}
                role='button'
            ></i>
            <input 
                className='input-search ms-3 cursor animate__animated animate__fadeInRight'
                type='text'
                placeholder='Buscar...'
                name='query'
                value={query}
                onChange={ handleInputChange }
                autoComplete='off'
            />

                <i 
                    className="fas fa-times" 
                    style={{ marginLeft: 10,fontSize: 13}}
                    onClick={ reset }
                    hidden={ view }
                    
                ></i>
         
        </div>
    )
}
