import { useDispatch } from 'react-redux'
import { getVideo } from '../../helpers/getVideo'
import { modalSetVideo, modalSetOpenTrue } from '../../actions/modalActions';

export const ButtonVideo = ( {video}:any ) => {

    

    const urlVideo = getVideo( video.key ) 
    const dispatch = useDispatch()

    console.log( video )
    const handleViewVideo = () => {
        dispatch( modalSetVideo( urlVideo ));
        dispatch( modalSetOpenTrue() );
    }

    return (
        <div>
            <button 
                className='btn-video' 
                onClick={ handleViewVideo }
            >
                <i className="fab fa-youtube me-2"></i>
                <span>{video.type}</span> 
            </button>
        </div>
    )
}