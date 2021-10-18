import bootstrap from "bootstrap"
import { Season } from "../../Types/Models/models"
import { getPoster } from '../../Helpers/getPoster';

interface iSeason{
    seasons:Season[]
}

export const NavSeason = ( { seasons }:iSeason) => {
    return (
        <div className='nav-season-frame'>
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                {
                    seasons.map( (season, ind) => (
                        <li className="nav-item" role="presentation">
                            <button 
                                className={`nav-link ${ ind === 0 ? 'active' : ''}`}
                                id={`pills-${ind}-tab`}
                                data-bs-toggle="pill" 
                                data-bs-target={`#pills-${ind}`}
                                type="button" 
                                role="tab" 
                                aria-controls={`pills-${ind}`}
                                aria-selected={`${ ind === 0 && true}`}

                            >{ season.name }</button>
                        </li>

                    ))
                }
            </ul>
            <hr />
            <div className="tab-content" id="myTabContent">
                {
                    seasons.map( (season, ind) => (

                        <div 
                            className={`tab-pane fade ${ ind === 0 && 'show active'} `} 
                            id={`pills-${ind}`} 
                            role="tabpanel" 
                            aria-labelledby={`pills-${ind}-tab`}
                        >

                            <div className='season-desc'>
                                <div className='col-xl-3'> 
                                    <img src={ getPoster( season.poster_path ) } />
                                </div>

                                <div className='col-xl-3'> 
                                    <blockquote>
                                        {season.overview}
                                    </blockquote>

                                </div>

                                <div className='col-xl-2'> 
                                    <ul>
                                        <li>Fecha emisión: {season.air_date}</li>
                                        <li>Episodios: { season.episode_count }</li>
                                    </ul>

                                </div>
                            </div>

                        </div>

                    ))

                }
            </div>
        </div>
    )
}


