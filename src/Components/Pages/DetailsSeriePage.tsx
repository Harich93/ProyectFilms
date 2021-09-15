import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { iActiveSerieRState, iLoadRState } from '../../types/interface/interfaces';
import { setActiveSerie, startGetCreditsSerieActive, startGetDetailsSerieActive, startGetImagesSerieActive, startGetRecommendSerieActive, startGetSimilarSerieActive, startGetVideosSerieActive } from '../../actions/activeSerieActions';
import { Serie } from '../../types/Models/models';
import { getGenres, titleHidden, titleLogo } from '../../helpers/detailsFunctions';
import { Snniper } from '../snniper/Snniper';
import { getPoster } from '../../helpers/getPoster';
import { ButtonVideo } from '../videoButton/ButtonVideo';
import { Slider } from '../sliders/Slider';
import { VideoModal } from '../modal/VideoModal';
import { ItemSliderSerie } from '../sliders/ItemSliderSerie';
import { ItemSliderCast } from '../sliders/ItemSliderCast';
import { NavSeason } from '../nav/NavSeason';
import { WatchProviders } from '../watchProviders/WatchProviders';

export const DetailsSeriePage = () => {
    
    const dispatch = useDispatch();
    
    const { Loading } = useSelector<RootState>(state => state.loadR) as iLoadRState;
    const state = useSelector<RootState>(state => state.activeSerieR ) as iActiveSerieRState;
    
    const formatDollar = Intl.NumberFormat('en-US');
    const { 
        
        ActiveSerieCast      : cast,
        ActiveSerieRecommend : recommend,
        ActiveSerieSimilar   : similar,
        ActiveSerie          : serie,
        ActiveSerieDetails   : details,
        ActiveSerieVideos    : videos,
        ActiveSerieImages    : images,
    
    } = state;


    useEffect(() => {
            window.scrollTo(0,0);

            
            if ( serie!== undefined ) {

                dispatch( startGetCreditsSerieActive( serie.id ) );
                dispatch( startGetDetailsSerieActive( serie.id ) );
                dispatch( startGetSimilarSerieActive( serie.id, true ) );
                dispatch( startGetRecommendSerieActive( serie.id, true ) );
                dispatch( startGetVideosSerieActive( serie.id ) );
                dispatch( startGetImagesSerieActive( serie.id) );

            } else {
                const activeLS = JSON.parse( localStorage.getItem('activeSerie')! ) as Serie; 
                dispatch ( setActiveSerie( activeLS ));

            }
        }, [ serie, dispatch]);

        useEffect(() => {
            titleHidden( 'details-title', 'disable-title')
        }, []);
    

    return (
        <>  
            {
                Loading || serie === undefined || images === undefined
                ? <Snniper />
                :    
                <>
                        <div 
                            className='details-frame animate__animated animate__fadeIn'
  
                        >
                            <div className='details-title'>
                                <h2>{serie?.name}</h2>
                                            
                                <i className="far fa-star"> {serie?.vote_average}</i> 
                                <span> Año: {serie?.first_air_date.substring(0, 4)}</span>
                               
                            </div>

                            <div className='details-row' >
                                <div className='details-container serie row'>
                                   
                                    <a 
                                        href={`${ details?.homepage }`}
                                        className='details-poster col-lg-6'
                                        style={{ backgroundImage: `url(${ getPoster(serie?.poster_path)})` }}
                                    > </a>
                                        

                                    <div className='details-description col-lg-6' >
                                        <div className='details-text' >
                                            <div 
                                                className='details-text-title' 
                                                
                                            >
                                                {
                                                    titleLogo( images?.logos, serie.original_name )
                                                }

                                                <p>{ getGenres( details?.genres ) }</p>
                                            </div>

                                            <hr />

                                            {
                                                details?.tagline !== "" &&
                                                    <i className='tagline'>"{ details?.tagline }</i>
                                            }
                                           
                                            <blockquote>{serie?.overview}</blockquote>
                                           
                                           <div className='details-details'>
                                                <ul className=' col-lg6'>
                                                    <li>
                                                        Duración episodios: 
                                                        {
                                                            details?.episode_run_time.map( time => (
                                                                <span><i className="far fa-clock ms-2"></i> {time}min. </span> 
                                                            ))
                                                        }
                                                    </li>
                                                </ul>

                                                <div className='details-videos col-lg-6'>
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


                            <div className='details-seasons'>
                                <NavSeason seasons={ details!.seasons}  />
                                <WatchProviders />
                            </div>

                            <div>
                                <h3>Ver en streaming</h3>

                            </div>

                                <div className='details-actors'>
                                    
                                        {cast.length > 0 &&
                                            <Slider
                                                component={ <ItemSliderCast casts={ cast } /> }
                                                title='Actores'
                                                items={cast}
                                        />}
                                       
                                    
                                        {recommend.length > 0 &&
                                            <Slider
                                                component={ <ItemSliderSerie items={ recommend } /> }
                                                title='Recomendaciones'
                                                items={recommend} 
                                                funInfiniteScroll={ startGetRecommendSerieActive( serie!.id, false)}
                                        />}
                                    
                                    
                                        {/* {similar.length > 0 &&
                                            <Slider
                                                component={ <ItemSliderSerie items={ similar } /> }
                                                title='Peliculas similares'
                                                items={similar} 
                                                funInfiniteScroll={ startGetSimilarSerieActive( serie!.id, false)}
                                            />} */}

                                       
                                    
                                </div>
                            </div>
                        </div>
                        

                        <VideoModal />

                    </>
            }
        </>
    )
}


