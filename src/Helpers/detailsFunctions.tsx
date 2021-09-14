import { Backdrop, Genre } from '../types/Models/models';
import { getPoster } from './getPoster';

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

export const getDuration = ( time: number | undefined ) => {
    if( time !== undefined ) {
        const hora = Math.floor(time / 60);
        const minutes = time % 60;
        
        return `${hora}h. ${minutes}min`;
    }
    
    return '0';
    
}

export const getGenres = ( genres: Genre[] | undefined ):string => {
    let strGenres = ''
    
    genres !== undefined &&
    
    genres.map( (genre, ind) => (
        ind === 0 
        ? strGenres = `${genre.name}`
        : strGenres = strGenres + " - " + genre.name
    ))
    
    return strGenres;
}

export const titleLogo = ( logos:Backdrop[], title:string ) => {
    if (logos.length > 0 ){
       let log =  logos.find( im => ( im.iso_639_1 === "en" ) )
       if(log === undefined ) return (<img src={ getPoster( logos[0].file_path ) } className='animate__animated animate__fadeIn' /> )
       return (<img src={ getPoster( log!.file_path ) } className='animate__animated animate__fadeIn' /> )
    }
    else 
        return (<h1 className='title ms-0'>{title} </h1>)
}