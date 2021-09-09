import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetOnAirSeries, startGetPopularSeries, startGetTopSeries } from '../../actions/seriesActions';
import { ItemSliderMovie } from '../sliders/ItemSliderMovie';
import { Slider } from '../sliders/Slider';
import { RootState } from '../../store/store';
import { iSeriesRState } from '../../types/interface/interfaces';
import { ItemSliderSerie } from '../sliders/ItemSliderSerie';


export const SeriesPage = () => {

    const dispatch = useDispatch();
    const { SeriesOnAir, SeriesTop, SeriesPopular } = useSelector<RootState>(state => state.seriesR ) as iSeriesRState

    useEffect(() => {

        if( SeriesOnAir.length === 0 ) {
            
            dispatch( startGetOnAirSeries() );
            dispatch( startGetTopSeries() );
            dispatch( startGetPopularSeries() );

        }
    
    }, [])


    return (
        <>
            <Slider 
                component={ <ItemSliderSerie items={ SeriesTop } /> }
                title='Top'
                componentStyle='poster'
                funInfiniteScroll={ startGetTopSeries( false ) }
            />
            
            <Slider 
                component={ <ItemSliderSerie items={ SeriesOnAir } /> }
                title='En emisión'
                componentStyle='poster'
                funInfiniteScroll={ startGetOnAirSeries( false ) }
            />

            
            <Slider 
                component={ <ItemSliderSerie items={ SeriesPopular } /> }
                title='Populares'
                componentStyle='poster'
                funInfiniteScroll={ startGetPopularSeries( false ) }
            />

        </>
    )
}
