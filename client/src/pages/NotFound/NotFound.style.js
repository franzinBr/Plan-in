import styled from 'styled-components';

export const NotFoundContainer = styled.div`
    width: 50rem;
    h1 {
        font-size: 8rem;
        text-align: center;
        color: ${(props) => props.theme.colors.text_second};
    }

    @media (max-width: 370px) {
        width: 45rem;
    }
`;
