import styled from 'styled-components';

export const ButtonStyled = styled.button`
    width: 100%;
    font-size: 1.8rem;
    cursor: pointer;
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.background};
    font-weight: 500;
    margin-top: 1rem;
    border-radius: 3px;
    padding: 2rem 0;
    transition: all 0.3s ease;
    &:hover {
        background: ${(props) => props.theme.colors.primary_plus};
    }

    &:disabled {
        opacity: 0.5;
        cursor: wait;
    }
`;
