import styled from 'styled-components';
import { ReactComponent as CloseBtn } from '../../assets/close-button.svg';
import { ReactComponent as Success } from '../../assets/success.svg';

export const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const ModalWrapper = styled.div`
    position: relative;
    width: 50%;
    height: 70%;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    border-radius: 10px;

    @media (max-width: 768px) {
        width: 70%;
    }

    @media (max-width: 400px) {
        width: 90%;
    }
`;

export const ModalContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SuccessIcon = styled(Success)``;

export const CloseIcon = styled(CloseBtn)`
    color: white;
    cursor: pointer;
    position: absolute;
    left: 95%;
    top: -3%;

    @media (max-width: 400px) {
        left: 86%;
        top: -6%;
    }
`;
