import { getPoster } from '../../helpers/getPoster';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { iActiveSerieRState } from '../../types/interface/interfaces';
import { useEffect } from 'react';
import { startGetWPSeries } from '../../actions/activeSerieActions';

interface iNamePlatforms{
    
}

export const WatchProviders = () => {

    const dispatch = useDispatch();
    const { ActiveWPSerie: wp, ActiveSerie: serie } = useSelector<RootState>(state => state.activeSerieR) as iActiveSerieRState;

    useEffect(() => {
        serie !== undefined &&
        dispatch( startGetWPSeries( serie.id ))
    }, [serie])

    return (
        <>
            {
                wp !==undefined &&
                    <div className='platforms-container'>
                        {/* <h3>Ver en streaming</h3> */}
                        <ul>
                            { wp.flatrate.map( platform => (
                                <li><a href={`${wp.link}`}> <img src={`${getPoster( platform.logo_path )}`} /> </a></li>
                            ))}
                        </ul>
                    </div>
            }   
        </>
    )
}
