
import { ItemSliderMovie } from './ItemSliderMovie';
import { useEffect } from 'react';
import { scrollSlider } from '../../Helpers/scrollSlider';
import { Movie } from '../../Types/Models/models';


export interface Slider {
    title        : string,
    itemCounter? : number,
    items?       : Movie[] 
}


export const SliderMovie = ( { title, itemCounter, items }:Slider ) => {
    
    const titleId = title.replace(' ', '');
    
    useEffect(() => {
        scrollSlider( titleId );
    }, [])

    return (
        <div>
            <h2 className='slider-title'>{title}</h2>

            <div id={`slider-${titleId}`} className='slider-frame'> 

                <div className='slider-container'>
                    {
                        items?.map( film => ( 
                            <ItemSliderMovie key={film.id} movie={ film }/> 
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
