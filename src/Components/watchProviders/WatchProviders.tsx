import { getPoster } from '../../Helpers/getPoster';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store/store';
import { iActiveSerieRState } from '../../Types/interface/interfaces';
import { useEffect } from 'react';
import { startGetWPSeries } from '../../Actions/activeSerieActions';

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
                    <div className='platforms-container text-end'>
                        <h4>Ver en streaming</h4>
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
