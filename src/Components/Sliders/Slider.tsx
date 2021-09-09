
import { useEffect, ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import { scrollSlider } from '../../helpers/scrollSlider';


export interface iSlider {
    title        : string,
    itemCounter? : number,
    items?       : any[],
    componentStyle     : 'poster' | 'circle',
    component          : ReactElement
    funInfiniteScroll? : ( a?:any, b?:boolean) => Promise<void>
}



export const Slider = ( { title, items, component, componentStyle, funInfiniteScroll }:iSlider ) => {

    const dispatch = useDispatch()

    const titleId = title.replace(' ', '');

    const scrollInfinite = () => {

        const a = document.querySelector(`#slider-${titleId}`) as HTMLElement;
    
        a.scrollWidth - a.scrollLeft  <= ( 2000 ) 
            && dispatch( funInfiniteScroll );
    }

    const initScrollControl = () => {
        scrollSlider( titleId );
        scrollInfinite();
    }
    
    useEffect(() => {
        scrollSlider( titleId )
    }, [titleId])
    
    return (
        <div className='animate__animated animate__fadeIn' onWheel={ initScrollControl  } onTouchMove={ initScrollControl }>
            <h2 className='slider-title'>{title}</h2>

            <div id={`slider-${titleId}`} className='slider-frame'> 

                <div className={`slider-container ${ componentStyle === 'circle' ? 'circle' : 'poster' }`} >
                    { component }  
                </div>
            </div>
        </div>
    )
}
