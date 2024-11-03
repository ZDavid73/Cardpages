import { useSelector } from 'react-redux';
import './Modal.css';
import { createPortal } from 'react-dom';
import { AppState } from '../../types/stateType';
import useModal from '../../hooks/useModal';

const Modal = () => {
    const  modal  = useSelector((state: AppState) => state.modal);
    const { renderModalContent } = useModal();

    if (!modal.isOpen) return null;

    return (
        createPortal(
            <div className="modal-overlay">
                <div className="modal-content">
                {renderModalContent()}
                </div>
            </div>,
            document.getElementById('root') as HTMLElement
        )
    );
}

export default Modal;