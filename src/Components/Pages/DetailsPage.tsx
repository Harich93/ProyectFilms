import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { startGetCreditsMovieActive, startGetSimilarActive, startGetRecommendActive, startGetDetaisActive } from '../../Actions/activeActions';
import { getPoster } from "../../Helpers/getPoster";
import { RootState } from '../../Store/store';
import { ActiveRState } from '../../Types/interface/interfaces';
import { Slider } from "../Sliders/Slider";
import { formatDollar } from '../../Helpers/formatDollar';

export const DetailsPage = () => {

    
    const dispatch = useDispatch();

    const { 
        ActiveCast      : cast, 
        ActiveSimilar   : similar, 
        ActiveMovie     : movie,
        ActiveRecommend : recommend,
        ActiveDetails   : details

    } = useSelector<RootState>(state => state.activeR) as ActiveRState;
    
    console.log( movie?.id)
    
    
    useEffect(() => {
        window.scrollTo(0,0);

        if ( movie !== undefined ) {
            dispatch( startGetCreditsMovieActive( movie?.id ) )
            dispatch( startGetSimilarActive( movie?.id, true ) )
            dispatch( startGetRecommendActive( movie?.id, true ) )
            dispatch( startGetDetaisActive( movie?.id ) )
        }
    }, [ movie ])

    


    return (
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
                            className='details-poster col-xl-6'
                            style={{ backgroundImage: `url(${getPoster(movie!.poster_path)})` }}
                        ></div>

                        <div className='details-description col-xl-6'>
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
        </>
    )
}
