import React from 'react';
import {
    Background,
    ModalWrapper,
    ModalContent,
    SuccessIcon,
    CloseIcon,
} from './Modal.style';

const Modal = ({ showModal, setShowModal, success, reset, children }) => {
    const [error, setError] = React.useState(null);
    const modalRef = React.useRef();

    const keyPressEvent = React.useCallback(
        (e) => {
            if (e.key === 'Escape' && showModal) {
                setShowModal(false);
            }
        },
        [showModal, setShowModal]
    );

    React.useEffect(() => {
        document.addEventListener('keydown', keyPressEvent);

        return () => document.removeEventListener('keydown', keyPressEvent);
    }, [keyPressEvent]);

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            reset();
            setError(null);
            setShowModal(false);
        }
    };

    return (
        <>
            {showModal ? (
                <Background onClick={closeModal} ref={modalRef}>
                    <ModalWrapper className="animeTop">
                        <ModalContent>
                            {!success ? <>{children}</> : <SuccessIcon />}
                            <CloseIcon
                                aria-label="Close Window"
                                onClick={() => setShowModal(false)}
                            />
                        </ModalContent>
                    </ModalWrapper>
                </Background>
            ) : null}
        </>
    );
};

export default Modal;
