import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetOnAirSeries, startGetPopularSeries, startGetTopSeries } from '../../Actions/seriesActions';
import { Slider } from '../Sliders/Slider';
import { RootState } from '../../Store/store';
import { iSeriesRState } from '../../Types/interface/interfaces';
import { ItemSliderSerie } from '../Sliders/ItemSliderSerie';
import { setFindSerie } from '../../Actions/searchActions';


export const SeriesPage = () => {

    const dispatch = useDispatch();
    const { SeriesOnAir, SeriesTop, SeriesPopular } = useSelector<RootState>(state => state.seriesR ) as iSeriesRState

    useEffect(() => {

        if( SeriesOnAir.length === 0 ) {
            
            dispatch( startGetOnAirSeries() );
            dispatch( startGetTopSeries() );
            dispatch( startGetPopularSeries() );
            
        }
        dispatch( setFindSerie() )
        
    }, [ SeriesOnAir, dispatch ])


    return (
        <>
            <Slider 
                component={ <ItemSliderSerie items={ SeriesTop } /> }
                title='Top'
                funInfiniteScroll={ startGetTopSeries( false ) }
            />
            
            <Slider 
                component={ <ItemSliderSerie items={ SeriesOnAir } /> }
                title='En emisión'
                funInfiniteScroll={ startGetOnAirSeries( false ) }
            />

            
            <Slider 
                component={ <ItemSliderSerie items={ SeriesPopular } /> }
                title='Populares'
                funInfiniteScroll={ startGetPopularSeries( false ) }
            />

        </>
    )
}
