import { useEffect } from "react";
import { useSelector } from "react-redux"
import { getPoster } from "../../Helpers/getPoster";
import { RootState } from '../../Store/store';
import { MoviesRState } from "../../Types/interface/interfaces";

export const DetailsPage = () => {
    
    const { SelectedFilm: movie } = useSelector<RootState>(state => state.moviesR) as MoviesRState;

    console.log( movie?.id )

    useEffect(() => {

    }, [])

    // a.style.backgroundImage =

    return (
        <>
            <div className='details-title'>
                <h2>{ movie?.title}</h2>
                <i className="far fa-star"> {movie?.vote_average}</i>
                <span> Año: {movie?.release_date.substring(0,4)}</span>     
            </div>

            <div className='details-row'>
                <div className='details-container row'>

                    <div 
                        className='details-poster col-6'
                        style={{ backgroundImage: `url(${getPoster( movie!.poster_path )})`}}
                    ></div>

                    <div className='details-description col-6'>
                        <div className='details-text'>
                            { movie?.original_language }
                            { movie?.overview }
                        </div>

                        <div className='details-actors'>
                            { movie?.overview }
                        </div>
                    </div>


                </div>
                
            </div>
        
        </>
    )
}
