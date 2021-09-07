import { Link } from 'react-router-dom';

import { Cast } from '../../Types/Models/models';
import { getPoster } from '../../Helpers/getPoster';



interface iItemSliderCast {
    cast : Cast
};

export const ItemSliderCast = ( { cast }:iItemSliderCast ) => {
    
    const poster = getPoster( cast.profile_path! );

    return (
        <Link to='/details'>
            <div 
                className='slider-item cast' 
                style={{ 
                    backgroundImage: `url(${poster})` 
                }}
            >
                <div className='col-4' >

                </div>
                <div className='slider-item-description des-cast col-8 animate__animated animate__fadeInDown'>
                    <div className='slider-item-title'>
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
    )
}