import bootstrap from "bootstrap"
import { Season } from "../../types/Models/models"
import { getPoster } from '../../helpers/getPoster';

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

                            <div className='season-poster'>
                                <img src={ getPoster( season.poster_path ) } />
                                <blockquote>{season.overview}</blockquote>
                            </div>

                        </div>

                    ))

                }
            </div>
        </div>
    )
}


