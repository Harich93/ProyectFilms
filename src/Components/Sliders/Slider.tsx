
import { ItemSliderMovie} from './ItemSliderMovie';
import { useEffect, useRef } from 'react';
import { scrollSlider } from '../../Helpers/scrollSlider';
import { ItemSliderCast } from './ItemSliderCast';
import { useDispatch } from 'react-redux';
import { startGetCinemaMovies, startGetPopularMovies, startGetUpcomingMovies } from '../../Actions/moviesActions';

export interface Slider {
    title        : string,
    itemCounter? : number,
    items?       : any[],
    component    : 'movies' | 'cast',
    functionDispatch?   : 'cinema' | 'popular' | 'upcoming'
}


export const Slider = ( { title, itemCounter, items, component, functionDispatch }:Slider ) => {

    let funDis:Function;

    functionDispatch === 'cinema' 
        ? funDis = startGetCinemaMovies
        : functionDispatch === 'popular'
            ? funDis = startGetPopularMovies
            : funDis = startGetUpcomingMovies 

    const dispatch = useDispatch()

    const titleId = title.replace(' ', '');

    const scrollInfinite = ( {target}:any ) => {

        component !== 'cast' &&
            target.scrollWidth - target.scrollLeft  <= ( 2000 ) 
                && dispatch( funDis( false ) );
    }
    
    
    useEffect(() => {
        scrollSlider( titleId )
    }, [])
    

    

    return (
        <div className='animate__animated animate__fadeIn'>
            <h2 className='slider-title'>{title}</h2>

            <div id={`slider-${titleId}`} className='slider-frame' onWheel={ scrollInfinite  }> 

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
