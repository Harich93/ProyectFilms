import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux"
import { startGetCreditsMovieActive, startGetSimilarActive, startGetRecommendActive, startGetDetaisActive, startGetVideosActive } from '../../Actions/activeActions';
import { getPoster } from "../../Helpers/getPoster";
import { RootState } from '../../Store/store';
import { ActiveRState, iLoadRState } from '../../Types/interface/interfaces';
import { Slider } from "../Sliders/Slider";
import { formatDollar } from '../../Helpers/formatDollar';
import { Snniper } from "../Snniper/Snniper";
import { titleHidden } from "../../Helpers/titleHidden";

export const DetailsPage = () => {

    
    const dispatch = useDispatch();

    const { Loading } = useSelector<RootState>(state => state.loadR) as iLoadRState

    const { 
        ActiveCast      : cast, 
        ActiveSimilar   : similar, 
        ActiveMovie     : movie,
        ActiveRecommend : recommend,
        ActiveDetails   : details,
        ActiveVideos    : videos

    } = useSelector<RootState>(state => state.activeR) as ActiveRState;

    const refMovie = useRef( movie );
    


    useEffect(() => {
        window.scrollTo(0,0);
        
        if ( movie !== undefined ) {
            dispatch( startGetCreditsMovieActive( movie.id ) );
            dispatch( startGetSimilarActive( movie.id, true ) );
            dispatch( startGetRecommendActive( movie.id, true ) );
            dispatch( startGetDetaisActive( movie.id ) );
            dispatch( startGetVideosActive( movie.id ) );

            refMovie.current = movie;
        }

    }, [ movie, dispatch ]);

    useEffect(() => {
       titleHidden( 'details-title', 'disable-title');

    }, []);

    

    const moduleVideos = () => (
        videos?.map( video => (
            <button className='btn-video'>
                <i className="fab fa-youtube me-2"></i>
                <span>{video.type}</span> 
            </button>
        ))
    );

    // const titleHidden = ( className:string, classNameAdd:string) => {
    //     const a = document.querySelector('.details-title');
        
    //     window.addEventListener('scroll', (e) => {
    //         a !== null &&
    //         window.scrollY > 300 
    //         ? (document.querySelector('.details-title')!.className = 'details-title disable-title') 
    //         : (document.querySelector('.details-title')?.className !== 'details-title') && (document.querySelector('.details-title')!.className = 'details-title')
    //     });
    // };

    return (
        <>   
            {
                Loading 
                    ? <Snniper />
                    :    
                        <div className='details-frame animate__animated animate__fadeIn'
                            
                        >
                            <div className='details-title'>
                                <h2>{movie?.title}</h2>
                                <i className="far fa-star"> {movie?.vote_average}</i>
                                <span> Año: {movie?.release_date.substring(0, 4)}</span>
                            </div>

                            <div className='details-row'>
                                <div className='details-container row'>

                                    <div
                                        className='details-poster col-lg-6'
                                        style={{ backgroundImage: `url(${getPoster(movie!.poster_path)})` }}
                                    ></div>

                                    <div className='details-description col-lg-6'>
                                        <div className='details-text'>
                                            <h1 className='title ms-0'>{movie?.original_title}</h1>
                                            <hr />
                                            {/* { movie?.original_language } */}
                                            {movie?.overview}
                                        </div>
                                        <ul>
                                            <li>Presupuesto: ${ formatDollar.format(details?.budget!)  }</li>
                                            <li>Ganancias: ${ formatDollar.format(details?.revenue!)  }</li>
                                        </ul>
                                        <div className='details-videos'>
                                            { moduleVideos() }

                                        </div>
                                    </div>


                                </div>

                            <div className='details-actors'>
                                {
                                    <>
                                        <Slider
                                            component='cast'
                                            title='Actores'
                                            items={cast} 
                                        />
                            
                                        <Slider
                                            component='movies'
                                            title='Peliculas similares'
                                            items={similar} 
                                        />

                                        <Slider
                                            component='movies'
                                            title='Recomendaciones'
                                            items={recommend} 
                                        />
                                    </>
                                }
                            </div>
                            </div>
                        </div>
            }
        </>
    )
}
