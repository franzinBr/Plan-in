import styled from 'styled-components';

export const ModulesBox = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 648px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 470px) {
        grid-template-columns: 1fr;
        padding: 3rem;
    }
`;
