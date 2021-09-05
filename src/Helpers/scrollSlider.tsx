
export const scrollSlider = ( id:string ) => {

    const a = document.querySelector(`#slider-${id}`) as HTMLElement;

    scrollSliderTouch( id );
    
    a.addEventListener('mouseover', () => {
        
        const body = document.getElementsByTagName('body')[0]
        body.className = 'stop-scrolling';
        
        a.addEventListener('wheel', (e) => {
                e.deltaY > 0
                ? (document.querySelector(`#slider-${id}`)!.scrollLeft -= 350 )
                : document.querySelector(`#slider-${id}`)!.scrollLeft += 350;
                
        });
            
            a.addEventListener('mouseout', () => {
                body.className = '';
            });
            
            a.addEventListener('click', () => {
                body.className = '';
            });
  
    });
}

export const scrollSliderTouch = ( id:string ) => {

    const a = document.querySelector(`#slider-${id}`) as HTMLElement;
   
    a.addEventListener('touchstart', ( e ) => {
        
        const body = document.getElementsByTagName('body')[0]
        body.className = 'stop-scrolling';
        const start = e.touches[0].clientX;

        a.addEventListener('touchmove', (e) => {
            const end = e.touches[0].clientX 
                start < end 
                    ? document.querySelector(`#slider-${id}`)!.scrollLeft -= 350 
                    : document.querySelector(`#slider-${id}`)!.scrollLeft += 350    
        });
                
        a.addEventListener('touchend', () => {
            body.className = '';
            console.log('cancel touch')
        });
        
    });
}




