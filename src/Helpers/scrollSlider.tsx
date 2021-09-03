
export const scrollSlider = ( id:string ) => {

    const a = document.querySelector(`#slider-${id}`) as HTMLElement

        a.addEventListener('mouseover', () => {

            const body = document.getElementsByTagName('body')[0]
            body.className = 'stop-scrolling';

            a.addEventListener('wheel', (e) => {
                e.deltaY > 0
                ? (document.querySelector(`#slider-${id}`)!.scrollLeft -= 190 )
                : document.querySelector(`#slider-${id}`)!.scrollLeft += 190;
            });
            
            a.addEventListener('mouseout', () => {
                body.className = '';
            });

            a.addEventListener('click', () => {
                body.className = '';
            });
            
        });
}