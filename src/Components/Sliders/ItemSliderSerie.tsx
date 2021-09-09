import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Serie } from '../../types/Models/models';
import { getPoster } from '../../helpers/getPoster';

import { ReactElement } from 'react';



interface iItemSliderSerie {
    items : Serie[]
};

export const ItemSliderSerie = ( { items }:iItemSliderSerie ):ReactElement => {

    const dispatch = useDispatch();

    // const handleOnClick = ( serie:Serie ) => {

    //     dispatch( setActiveSerie( serie ) );
    // } 

    return (

        <>
            { 
                items.map( serie => (
                    
                    <Link key={serie.id} to='/details'>
                        <div 
                            className='slider-item' 
                            style={{ backgroundImage: `url(${getPoster( serie.poster_path )})` }}
                            // onClick={ () => handleOnClick(serie) }
                        >
                            <div className='col-4' >

                            </div>
                            <div className='slider-item-description col-8 animate__animated animate__fadeIn'>
                                <div className='slider-item-title'>
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
