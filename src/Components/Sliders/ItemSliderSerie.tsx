// import { useDispatch } from 'react-redux';
import { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setActiveSerie } from '../../Actions/activeSerieActions';

import { getPoster } from '../../Helpers/getPoster';

import { Serie } from '../../Types/Models/models';



interface iItemSliderSerie {
    items : Serie[]
};

export const ItemSliderSerie = ( { items }:iItemSliderSerie ):ReactElement => {

    const dispatch = useDispatch();

    const handleOnClick = ( serie:Serie ) => {
        localStorage.setItem('activeSerie', JSON.stringify(serie) ); 
        dispatch( setActiveSerie( serie ) );
    } 

    return (

        <>
            { 
                items.map( serie => (
                    
                    <Link key={serie.id} to='/details-serie'>
                        <div 
                            className='card' 
                            style={{ backgroundImage: `url(${getPoster( serie.poster_path )})` }}
                            onClick={ () => handleOnClick(serie) }
                        >
                            <div className='col-4' >

                            </div>
                            <div className='card-description col-8 animate__animated animate__fadeIn'>
                                <div className='card-title'>
                                    <h3>{ serie.name }</h3>
                                    <i className="far fa-star"> {serie.vote_average}</i>
                                </div>
                                <span>{ serie.overview }</span>
                            </div>
                            
                        </div>
                    </Link>

                ))
            }
        
        </>
    )
}
