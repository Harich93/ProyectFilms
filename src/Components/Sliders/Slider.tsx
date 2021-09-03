
import { ItemSliderMovie} from './ItemSliderMovie';
import { useEffect } from 'react';
import { scrollSlider } from '../../Helpers/scrollSlider';
import { Movie } from '../../Types/Models/models';
import { ItemSliderCast } from './ItemSliderCast';



export interface Slider {
    title        : string,
    itemCounter? : number,
    items?       : any[],
    component    : 'movies' | 'cast'
}


export const Slider = ( { title, itemCounter, items, component }:Slider ) => {
    
    const titleId = title.replace(' ', '');
    
    useEffect(() => {
        scrollSlider( titleId );
    }, [])

    return (
        <div>
            <h2 className='slider-title'>{title}</h2>

            <div id={`slider-${titleId}`} className='slider-frame'> 

                <div className={`slider-container ${ component === 'cast' ? 'cast' : 'movie' }`}>
                    {
                        component === 'movies' 
                        ?(
                            items?.map( film => ( 
                                    <ItemSliderMovie key={film.id} movie={ film }/> 
                            ))

                        )
                        :(
                            items?.map( cast => ( 
                                <ItemSliderCast key={cast.id} cast={ cast }/> 
                        ))
                        )   
                    }
                </div>
            </div>
        </div>
    )
}
