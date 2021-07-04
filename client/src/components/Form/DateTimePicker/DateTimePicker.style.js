import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem 0.5rem;
`;

export const Label = styled.label`
    font-size: 1.8rem;
`;

export const DateTime = styled.input`
    width: 100%;
    margin-top: 0.5rem;
    font-size: 2rem;
    border: none;
    border-bottom: 2px solid ${(props) => props.theme.colors.text_second};
    color: ${(props) => props.theme.colors.text_second};
`;

export const Error = styled.span`
    color: #ff0033;
    font-size: 1.5rem;
    padding: 0.3rem 0.8rem;
`;
