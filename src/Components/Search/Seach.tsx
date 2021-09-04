import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteResults, startGetSearchMovies } from "../../Actions/searchActions";
import { useForm } from "../../Hooks/useForm";


export const Seach = () => {

    const dispatch = useDispatch();

    const [ values, handleInputChange ] = useForm({ query: '' });
    const { query } = values ;

    const [inputView, setInputView] = useState(true);

    const handleChangeView = () => {
        setInputView( !inputView )
    }

    useEffect(() => {
        query.length > 2
            ? dispatch( startGetSearchMovies( query ))
            : dispatch( deleteResults() );
    }, [ query.length ])



    return (
        <div className='search-frame'>
            <i 
                className="fas fa-search" 
                style={{ fontSize: 13}}
                onClick={ handleChangeView }
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
                hidden={ inputView }
            />
        </div>
    )
}
