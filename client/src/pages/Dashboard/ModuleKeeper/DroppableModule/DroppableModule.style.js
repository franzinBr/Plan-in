import styled from 'styled-components';
import { ReactComponent as Add } from '../../../../assets/add.svg';
import { ReactComponent as Delete } from '../../../../assets/delete.svg';
import { ReactComponent as Edit } from '../../../../assets/edit.svg';
import { ReactComponent as ModIcon } from '../../../../assets/module.svg';

export const ModuleContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
`;

export const ModuleList = styled.ul`
    padding: 4.5rem 3rem;
    list-style-type: none;
    min-height: 30rem;

    @media (max-width: 470px) {
        min-height: 50rem;
    }
`;

export const ModuleInfo = styled.div`
    display: flex;
    position: relative;
    border-radius: 20px 20px 0px 0px;
    justify-content: center;
    min-height: 10rem;
    background: rgba(0, 0, 0, 0.05);
    h1 {
        align-self: center;
        color: ${(props) => props.theme.colors.primary};
        font-size: 2.5rem;
        text-align: center;
    }
    @media (max-width: 470px) {
        h1 {
            font-size: 3.5rem;
        }
    }
`;

export const ModuleIcon = styled(ModIcon)`
    width: 5rem;
    margin-right: 0.6rem;
    align-self: center;
    rect {
        transition: all 0.3s ease;
        fill: ${(props) => props.theme.colors.primary};
    }

    path {
        transition: all 0.3s ease;
        stroke: ${(props) => props.theme.colors.primary_plus};
    }
`;

export const Actions = styled.div`
    bottom: -20%;
    right: 16%;
    position: absolute;
    align-self: center;
    display: flex;
    width: 22%;
    @media (max-width: 470px) {
        width: 18%;
        bottom: -30%;
    }
`;

export const DeleteButton = styled(Delete)`
    cursor: pointer;
    margin-left: 0.8rem;
`;
export const EditButton = styled(Edit)`
    cursor: pointer;
`;

export const AddButton = styled(Add)`
    cursor: pointer;
    width: 13%;
    position: absolute;
    bottom: -20%;
    right: 1%;

    @media (max-width: 470px) {
        width: 12%;
        bottom: -30%;
    }
`;
