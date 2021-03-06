import { useDispatch } from 'react-redux'
import { getVideo } from '../../Helpers/getVideo'
import { modalSetVideo, modalSetOpenTrue } from '../../Actions/modalActions';

export const ButtonVideo = ( {video}:any ) => {

    

    const urlVideo = getVideo( video.key ) 
    const dispatch = useDispatch()

    const handleViewVideo = () => {
        dispatch( modalSetVideo( urlVideo ));
        dispatch( modalSetOpenTrue() );
    }

    return (
        <>
            <button 
                className='btn-video' 
                onClick={ handleViewVideo }
            >
                <i className="fab fa-youtube me-2"></i>
                <span>{video.type}</span> 
            </button>
        </>
    )
}
