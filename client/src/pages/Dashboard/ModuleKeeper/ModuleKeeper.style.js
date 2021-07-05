import styled from 'styled-components';

export const ModulesBox = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 380px) {
        grid-template-columns: 1fr;
    }
`;
