import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { deleteResults, startGetSearch } from "../../Actions/searchActions";
import { useForm } from "../../Hooks/useForm";

interface iSearch  {
    find: 'movie' | 'tv'
}

export const Seach = (  { find }:iSearch ) => {

    const dispatch = useDispatch();
    
    const [ values, handleInputChange, reset] = useForm({ query: '' });
    const { query } = values ;
    
    const [view, setView] = useState(true);
    
    useEffect(() => {
        if (query.length > 2) {
            dispatch( startGetSearch( query, find ));
            setView( false );
        }
        else {
            dispatch( deleteResults() );
                setView( true );
            }
        }, [ query, find, dispatch])
        


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
                placeholder={`Buscar ${ find !== 'movie' ? 'serie' : 'pelicula' }...`}
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

