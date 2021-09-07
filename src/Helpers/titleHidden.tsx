export const titleHidden = ( className:string, classNameAdd:string ) => {

    

    window.addEventListener('scroll', (e) => {
        console.log( ' title hidden ')
        if(document.querySelector(`.${className}`) !== null) {
            window.scrollY > 300 
            ? (document.querySelector(`.${className}`)!.className = `${className} ${classNameAdd}`) 
            : (document.querySelector(`.${className}`)?.className !== `${className}`) && (document.querySelector(`.${className}`)!.className = `${className}`)
        }
    });

    // window.removeEventListener('scroll', (e) => {
    //     console.log( ' title hidden ')
    //     if(document.querySelector(`.${className}`) !== null) {
    //         window.scrollY > 300 
    //         ? (document.querySelector(`.${className}`)!.className = `${className} ${classNameAdd}`) 
    //         : (document.querySelector(`.${className}`)?.className !== `${className}`) && (document.querySelector(`.${className}`)!.className = `${className}`)
    //     }
    // });

}