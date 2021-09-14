

import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { ModalRState } from '../../types/interface/interfaces';
import { modalSetOpenFalse } from '../../actions/modalActions';
// import { CSSProperties } from 'react';


export const VideoModal = () => {

    const dispatch = useDispatch();

    const { ModalOpen, ModalVideo } = useSelector<RootState>( state => state.modalR ) as ModalRState;

    const closeModal = () => {
        dispatch( modalSetOpenFalse() );
    }

    return (
        <div>
            <Modal
                isOpen={ModalOpen}
                onRequestClose={closeModal}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.98)'
                    },
            
                    content: {
                      top: '50%',
                      left: '50%',
                      right: 'auto',
                      bottom: 'auto',
                      marginRight: '-50%',
                      transform: 'translate(-50%, -50%)',
                      backgroundColor: 'transparent',
                      border: 'none'
                    },
                }}
                
                contentLabel="Example Modal"
            >
                <div className='modal-row'> 
                    <iframe 
                        // width="1060" height="615" 
                        src={ ModalVideo }
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        
                    ></iframe>

                    <div className='modal-close' role='button' onClick={ closeModal }>
                        <i 
                            className="fas fa-times" 
                            style={{ marginLeft: 10,fontSize: 13}}

                        ></i>
                        <span>Cerrar video</span>
                    </div>

                </div>

            </Modal>
        </div>
    )
}
