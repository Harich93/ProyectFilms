import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetOnAirSeries, startGetPopularSeries, startGetTopSeries } from '../../actions/seriesActions';
import { Slider } from '../sliders/Slider';
import { RootState } from '../../store/store';
import { iSeriesRState } from '../../types/interface/interfaces';
import { ItemSliderSerie } from '../sliders/ItemSliderSerie';
import { setFindSerie } from '../../actions/searchActions';


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
