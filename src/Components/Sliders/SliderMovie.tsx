import { Movie } from '../../Models/models';
import { ItemSliderMovie } from './ItemSliderMovie';
import { getPoster } from '../../Helpers/getPoster';
import { useEffect } from 'react';

interface Slider {
    title        : string,
    itemCounter? : number,
    items?       : Movie[] 
}


export const SliderMovie = ( { title, itemCounter, items }:Slider ) => {

    const id = Math.random()*99999;
    const titleId = title.replace(' ', '');

    useEffect(() => {

        const a = document.querySelector(`#slider-${titleId}`) as HTMLElement

        a.addEventListener('wheel', (e) => {
            e.deltaY > 0
                ? document.querySelector(`#slider-${titleId}`)!.scrollLeft -= 190
                : document.querySelector(`#slider-${titleId}`)!.scrollLeft += 190;
        });

    }, [])

    return (
        <div>
            <h2 className='slider-title'>{title}</h2>
            <div id={`slider-${titleId}`} className='slider-frame'> 
                      
                {/* <div className="btn prev"></div>
                <div className="btn next" onClick={ () => scrollNext() }></div> */}

                    <div className='slider-container'>
                        {
                            items?.map( film => (
                                
                                <ItemSliderMovie poster={ getPoster(film.poster_path) }/>
                            ))
                        }
                    </div>
            </div>
        </div>
    )
}
