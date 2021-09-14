import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { RootState } from '../../store/store';

import { ActiveRState, iLoadRState } from '../../types/interface/interfaces';
import { 
    startGetCreditsMovieActive, 
    startGetSimilarActive, 
    startGetRecommendActive, 
    startGetDetaisActive, 
    startGetVideosActive, 
    setActiveMovie, 
    startGetImagesMovieActive 

    } from '../../actions/activeActions';

import { Snniper } from "../snniper/Snniper";

import { getPoster } from "../../helpers/getPoster";

import { Slider } from "../sliders/Slider";
import { ItemSliderMovie } from "../sliders/ItemSliderMovie";
import { ItemSliderCast } from '../sliders/ItemSliderCast';
import { ButtonVideo } from "../videoButton/ButtonVideo";
import { VideoModal } from "../modal/VideoModal";
import { Movie } from '../../types/Models/models';
import { getDuration, getGenres, titleHidden, titleLogo } from "../../helpers/detailsFunctions";





export const DetailsPage = () => {
    

    
    
    const dispatch = useDispatch();
    const formatDollar = Intl.NumberFormat('en-US');
    
    const { Loading } = useSelector<RootState>(state => state.loadR) as iLoadRState
    
    const { 
        ActiveCast      : cast, 
        ActiveSimilar   : similar, 
        ActiveMovie     : movie,
        ActiveRecommend : recommend,
        ActiveDetails   : details,
        ActiveVideos    : videos,
        ActiveImages    : images
        
    } = useSelector<RootState>(state => state.activeR) as ActiveRState;
    
    useEffect(() => {
        window.scrollTo(0,0);

        
        if ( movie !== undefined ) {

            dispatch( startGetCreditsMovieActive( movie.id ) );
            dispatch( startGetSimilarActive( movie.id, true ) );
            dispatch( startGetRecommendActive( movie.id, true ) );
            dispatch( startGetDetaisActive( movie.id ) );
            dispatch( startGetVideosActive( movie.id ) );
            dispatch( startGetImagesMovieActive( movie.id ) );

        } else {
            const activeLS = JSON.parse( localStorage.getItem('activeMovie')! ) as Movie; 
            dispatch (setActiveMovie( activeLS ));

        }

        
    }, [ movie, dispatch]);
    
    
    useEffect(() => {
        titleHidden( 'details-title', 'disable-title')
    }, []);
    
    
    let duration = getDuration( details?.runtime );

    return (
        <>   
            {
                Loading || movie === undefined || images === undefined
                ? <Snniper />
                :    
                <>
                        <div 
                            className='details-frame animate__animated animate__fadeIn'
  
                        >
                            <div className='details-title'>
                                <h2>{movie?.title}</h2>
                                            
                                <i className="far fa-star"> {movie?.vote_average}</i> 
                                <span> Año: {movie?.release_date.substring(0, 4)}</span>
                               

                            </div>

                            <div className='details-row' >
                                <div className='details-container row'>
                                   
                                    <a 
                                        href={`${ details?.homepage }`}
                                        className='details-poster col-lg-6'
                                        style={{ backgroundImage: `url(${ getPoster(movie?.poster_path)})` }}
                                    > </a>
                                        

                                    <div className='details-description col-md-6' >
                                        <div className='details-text' >
                                            <div 
                                                className='details-text-title' 
                                                
                                            >
                                                <div className='title-logo'>
                                                    {
                                                        titleLogo( images.logos, movie.original_title )
                                                    }
                                                </div>

                                                <p>{ getGenres( details?.genres ) }</p>
                                            </div>

                                            <hr />
                                           
                                            {
                                                details?.tagline !== "" &&
                                                    <i className='tagline'>"{ details?.tagline }</i>
                                            }
                                            <blockquote>{movie?.overview}</blockquote>


                                           
                                           <div className='details-details'>
                                                <ul className=' col-md-6'>
                                                    <li>
                                                        Duración: 
                                                        <p><i className="far fa-clock"></i> { duration } </p>
                                                    </li>
                                                    <li>
                                                        Presupuesto:
                                                        <p><i className="fas fa-dollar-sign"></i> { formatDollar.format(details?.budget!)  }</p>
                                                    </li>
                                                    <li>
                                                        Ganancias: 
                                                        <p><i className="fas fa-dollar-sign"></i> { formatDollar.format(details?.revenue!)  }</p>
                                                    </li>
                                                </ul>
                                                <div className='details-videos col-md-6'>
                                                    {         
                                                        videos!.map( video => (
                                                            <ButtonVideo key={ video.key } video={ video }/>
                                                        )) 
                                                    }

                                                </div>
                                           </div>

                                    </div>


                                </div>

                                    <i className="fas fa-chevron-down" style={{ fontSize: 30 }}></i>
                            
                            </div>

                                <div className='details-actors'>
                                    
                                        {cast.length > 0 &&
                                            <Slider
                                                component={ <ItemSliderCast casts={ cast } /> }
                                                title='Actores'
                                                items={cast}
                                                // funInfiniteScroll={ startGetRecommendActive( movie!.id, false)} 
                                        />}
                                       
                                    
                                        {recommend.length > 0 &&
                                            <Slider
                                                component={ <ItemSliderMovie movies={ recommend } /> }
                                                title='Recomendaciones'
                                                items={recommend} 
                                                funInfiniteScroll={ startGetRecommendActive( movie!.id, false)}
                                        />}
                                    
                                    
                                        {similar.length > 0 &&
                                            <Slider
                                                component={ <ItemSliderMovie movies={ similar } /> }
                                                title='Peliculas similares'
                                                items={similar} 
                                                funInfiniteScroll={ startGetSimilarActive( movie!.id, false)}
                                            />}

                                       
                                    
                                </div>
                            </div>
                        </div>
                        

                        <VideoModal />

                    </>
            }
        </>
    )
}
