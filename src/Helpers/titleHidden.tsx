export const titleHidden = ( className:string, classNameAdd:string ) => {

    const funScroll = function(){
        if(document.querySelector(`.${className}`) !== null) {

            window.scrollY > 5

                ? document.querySelector(`.${className}`)!.className !== `${className} ${classNameAdd}` &&
                    (document.querySelector(`.${className}`)!.className = `${className} ${classNameAdd}`)
            
                : document.querySelector(`.${className}`)?.className !== `${className}` &&
                    (document.querySelector(`.${className}`)!.className = `${className}`);
        }
    }

    window.addEventListener('scroll', (e)=> { e.preventDefault(); funScroll() } );

    window.removeEventListener('scroll',() => funScroll() );

}