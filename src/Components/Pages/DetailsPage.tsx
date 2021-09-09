import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { RootState } from '../../store/store';

import { ActiveRState, iLoadRState, Video } from '../../types/interface/interfaces';
import { startGetCreditsMovieActive, startGetSimilarActive, startGetRecommendActive, startGetDetaisActive, startGetVideosActive } from '../../actions/activeActions';

import { Snniper } from "../snniper/Snniper";

import { titleHidden } from "../../helpers/titleHidden";
import { getPoster } from "../../helpers/getPoster";
import { getVideo } from '../../helpers/getVideo';

import { Slider } from "../sliders/Slider";
import { ItemSliderMovie } from "../sliders/ItemSliderMovie";
import { ItemSliderCast } from '../sliders/ItemSliderCast';
import { ButtonVideo } from "../videoButton/ButtonVideo";
import { VideoModal } from "../modal/VideoModal";


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
        ActiveVideos    : videos
        
    } = useSelector<RootState>(state => state.activeR) as ActiveRState;
    
    useEffect(() => {
        window.scrollTo(0,0);
        
        if ( movie !== undefined ) {
            dispatch( startGetCreditsMovieActive( movie.id ) );
            dispatch( startGetSimilarActive( movie.id, true ) );
            dispatch( startGetRecommendActive( movie.id, true ) );
            dispatch( startGetDetaisActive( movie.id ) );
            dispatch( startGetVideosActive( movie.id ) );
        
        }

    }, [ movie, dispatch]);
    
    const getDuration = () => {
        if( details?.runtime !== undefined ) {
            const hora = Math.floor(details!.runtime / 60);
            const minutes = details!.runtime % 60;

            return `${hora}h. ${minutes}min`;
        }

        return '0';
        
    }
    
    

    useEffect(() => {
        titleHidden( 'details-title', 'disable-title')
    }, []);
    
    
        
    let duration = getDuration();
        return (
        <>   
            {
                Loading 
                    ? <Snniper />
                    :    
                    <>
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

                                    <div className='details-description col-lg-6' >
                                        <div className='details-text' >
                                            <h1 className='title ms-0'>{movie?.original_title} </h1>

                                            <hr />
                                           
                                            <blockquote>{movie?.overview}</blockquote>
                                           
                                           <div className='details-details'>
                                                <ul className=' col-lg6'>
                                                    <li>
                                                        Duración: 
                                                        <p>{ duration } </p>
                                                    </li>
                                                    <li>
                                                        Presupuesto:
                                                        <p>${ formatDollar.format(details?.budget!)  }</p>
                                                    </li>
                                                    <li>
                                                        Ganancias: 
                                                        <p>${ formatDollar.format(details?.revenue!)  }</p>
                                                    </li>
                                                </ul>

                                                <div className='details-videos col-lg-6'>
                                                    {         
                                                        videos!.map( video => (
                                                                    <ButtonVideo video={ video }/>
                                                        )) 
                                                    }

                                                </div>
                                           </div>

                                    </div>


                                </div>

                                    <i className="fas fa-chevron-down" style={{ fontSize: 30 }}></i>
                            
                            </div>



                                <div className='details-actors'>
                                    {
                                        <>
                                            <Slider
                                                component={ <ItemSliderCast casts={ cast } /> }
                                                componentStyle='circle'
                                                title='Actores'
                                                items={cast}
                                                funInfiniteScroll={ startGetRecommendActive( movie!.id, false)} 
                                            />
                                    {
                                        recommend.length > 0 &&
                                            <Slider
                                                component={ <ItemSliderMovie movies={ recommend } /> }
                                                componentStyle='poster'
                                                title='Recomendaciones'
                                                items={recommend} 
                                                funInfiniteScroll={ startGetRecommendActive( movie!.id, false)}
                                            />
                                    }
                                    
                                            <Slider
                                                component={ <ItemSliderMovie movies={ similar } /> }
                                                componentStyle='poster'
                                                title='Peliculas similares'
                                                items={similar} 
                                                funInfiniteScroll={ startGetRecommendActive( movie!.id, false)}
                                            />

                                        </>
                                    }
                                </div>
                            </div>
                        </div>

                        <VideoModal />

                    </>
            }
        </>
    )
}
