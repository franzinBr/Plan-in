import styled from 'styled-components';
import { ReactComponent as Delete } from '../../../../assets/delete.svg';
import { ReactComponent as Edit } from '../../../../assets/edit.svg';

export const ClassItem = styled.li`
    position: relative;
    padding: 1rem;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    margin-bottom: 1.5rem;
    border-collapse: collapse;
    display: flex;
    align-items: center;
    border-left: 6px solid ${(props) => props.theme.colors.primary};
    justify-content: space-between;

    @media (max-width: 470px) {
        height: 7rem;
    }
`;
export const Content = styled.div`
    h1 {
        font-size: 1.8rem;
        color: ${(props) => props.theme.colors.primary_plus};
    }

    p {
        font-size: 1.2rem;
        color: ${(props) => props.theme.colors.text_second};
    }
`;
export const Actions = styled.div`
    position: absolute;
    top: 0;
    right: -10%;
    width: 5rem;
    height: 5.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 470px) {
        right: -5%;
        height: 7rem;
    }
`;

export const ModalBox = styled.div``;

export const DeleteButton = styled(Delete)`
    cursor: pointer;
    margin-top: 1rem;

    @media (max-width: 470px) {
        //margin-top: 1rem;
    }
`;
export const EditButton = styled(Edit)`
    cursor: pointer;
`;
