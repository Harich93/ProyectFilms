import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { startGetCreditsMovieActive } from "../../Actions/activeActions";
import { getPoster } from "../../Helpers/getPoster";
import { RootState } from '../../Store/store';
import { ActiveRState } from "../../Types/interface/interfaces";
import { Slider } from "../Sliders/Slider";

export const DetailsPage = () => {
    
    const dispatch = useDispatch();

    const { 
        
        ActiveCast: cast, 
        ActiveImages: images, 
        ActiveMovie: movie 

    } = useSelector<RootState>(state => state.activeR) as ActiveRState;



    useEffect(() => {
        movie !== undefined &&
            dispatch( startGetCreditsMovieActive( movie?.id ) )
    }, [])


    return (
        <div className='details-frame'>
            <div className='details-title'>
                <h2>{ movie?.title}</h2>
                <i className="far fa-star"> {movie?.vote_average}</i>
                <span> Año: {movie?.release_date.substring(0,4)}</span>     
            </div>

            <div className='details-row'>
                <div className='details-container row'>

                    <div 
                        className='details-poster col-xl-8'
                        style={{ backgroundImage: `url(${getPoster( movie!.poster_path )})`}}
                    ></div>

                    <div className='details-description col-xl-4'>
                        <div className='details-text'>
                            <h1 className='title ms-0'>{movie?.original_title}</h1>
                            <hr />
                            {/* { movie?.original_language } */}
                            { movie?.overview }
                        </div>
                    </div>


                </div> 

            </div>
                <div className='details-actors'>
                    { 
                        <Slider
                            component='cast'
                            title='Actores'
                            items={ cast }
                        />
                    }
                </div>
        </div>
    )
}
