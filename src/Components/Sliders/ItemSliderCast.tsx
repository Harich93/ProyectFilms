import { Link } from 'react-router-dom';

import { Cast } from '../../Types/Models/models';
import { getPoster } from '../../Helpers/getPoster';



export interface iItemSliderCast {
    casts : Cast[]
};

export const ItemSliderCast = ( { casts }:iItemSliderCast ) => {

    return (

        <> 
            {
                casts.map( cast => (

                    <Link key={ cast.id } to='/details'>
                        <div 
                            className='card circle' 
                            style={{ 
                                backgroundImage: `url(${getPoster( cast.profile_path! )})` 
                            }}
                        >
                            <div className='col-4' >

                            </div>
                            <div className='card-description des-cast col-8 animate__animated animate__fadeInDown'>
                                <div className='card-title'>
                                    <h3>{ cast.name }</h3>
                                    <i className="far fa-star">{cast.popularity}</i>
                                </div>
                                <ul>
                                    <li><span>Nombre original: </span> { cast.original_name }</li>
                                    <li><span>Personaje: </span> { cast.character }</li>
                                </ul>
                            </div>
                            
                        </div>
                    </Link>

                ))
            }
        </>
    )
}