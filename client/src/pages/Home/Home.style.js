import styled from 'styled-components';

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
    @media (max-width: 325px) {
        grid-template-columns: 1fr;
    }
`;

export const Classes = styled.div`
    width: 100%;
    padding: 1rem 5rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10rem;

    @media (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 520px) {
        grid-template-columns: 1fr;
    }
`;
