import { useSelector } from "react-redux"
import { RootState } from '../../Store/store';
import { iLoadRState, iSearchRState } from '../../Types/interface/interfaces';
import { Snniper } from "../Snniper/Snniper";
import { SearchCard } from '../Search/SearchCard';



export const SearchResults = () => {

    const { Results } = useSelector<RootState>(state => state.searchR) as iSearchRState;
    const { Loading } = useSelector<RootState>(state => state.loadR) as iLoadRState;

    return (

        <>
            {   Loading || Results === undefined
                        ? <Snniper />
                        :
                            <div className='search-res-frame animate__animated animate__fadeIn'>
                                <h1 className='search-res-title animate__animated animate__fadeIn'>
                                    {
                                        Results.length > 0 ? 'Resultado búsqueda'
                                                           : 'Esperando búsqueda...'
                                    
                                    }
                                    
                                </h1>
                            <div className='search-res-container'>

                                    {
                                        Results.map( movie => (
                                            <SearchCard key={ movie.id } movie={ movie } />
                                        ))
                                    }
                            </div>
                            </div>
            }
        </>

    )
}
