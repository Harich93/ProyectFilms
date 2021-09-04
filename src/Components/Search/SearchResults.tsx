import { useSelector } from "react-redux"
import { RootState } from '../../Store/store';
import { iSearchRState } from '../../Types/interface/interfaces';
import { ItemSliderMovie } from "../Sliders/ItemSliderMovie";
import { Slider } from "../Sliders/Slider";
import { SearchCard } from './SearchCard';


export const SearchResults = () => {

    const { Results } = useSelector<RootState>(state => state.searchR) as iSearchRState;

    return (
        <div className='search-res-frame animate__animated animate__fadeIn'>
          <div className='search-res-container'>
                {
                    Results.map( movie => (
                        <SearchCard key={ movie.id } movie={ movie } />
                    ))
                }
          </div>
        </div>
    )
}
