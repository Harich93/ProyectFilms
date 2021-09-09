

import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { ModalRState } from '../../types/interface/interfaces';
import { modalSetOpenFalse } from '../../actions/modalActions';


export const VideoModal = () => {

    const dispatch = useDispatch();

    const { ModalOpen, ModalVideo } = useSelector<RootState>( state => state.modalR ) as ModalRState;

    const customStyles = {

        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'transparent'
        },
      };

    const closeModal = () => {
        dispatch( modalSetOpenFalse() );
    }

    console.log( ModalVideo )

    return (
        <div>
            <Modal
                isOpen={ModalOpen}
                onRequestClose={closeModal}
                style={customStyles}
                
                contentLabel="Example Modal"
            >
                <iframe 
                    width="1060" height="615" 
                    src={ ModalVideo }
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    
                    >

                </iframe>
            </Modal>
        </div>
    )
}
