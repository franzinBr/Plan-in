import styled from 'styled-components';
import { ReactComponent as Empty } from '../../assets/empty.svg';

export const HomeContainer = styled.div`
    width: 100%;
`;

export const Modules = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    padding: 1rem 2rem;

    @media (max-width: 800px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 520px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 380px) {
        grid-template-columns: 1fr;
    }
`;

export const Classes = styled.div`
    width: 100%;
    padding: 1rem 5rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 6rem;
    row-gap: 4rem;
    //gap: 8rem;

    @media (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 700px) {
        gap: 2rem;
    }

    @media (max-width: 520px) {
        grid-template-columns: 1fr;
        gap: 5rem;
    }
`;
export const EmptyDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        margin-left: 1rem;
        font-size: 2rem;
        padding: 4rem;
        box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
        border-left: 15px solid ${(props) => props.theme.colors.primary_plus};
    }
    padding: 0 2rem;

    @media (max-width: 500px) {
        p {
            padding: 3rem;
            font-size: 2.2rem;
            margin-left: 0;
            margin-bottom: 2.5rem;
        }
        flex-direction: column-reverse;
    }
`;
export const EmptyImg = styled(Empty)`
    width: 50rem;
    @media (max-width: 500px) {
        width: 35rem;
    }
`;
