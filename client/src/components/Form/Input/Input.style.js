import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem 0.5rem;

    label {
        font-size: 1.8rem;
    }

    input {
        margin-top: 0.5rem;
        font-size: 2rem;
        border: none;
        padding: 1rem;
        border-bottom: 2px solid ${(props) => props.theme.colors.text_second};
        color: ${(props) => props.theme.colors.text_second};
    }

    .underLine {
        height: 2px;
        position: relative;
        margin-top: -2px;

        &::before {
            position: absolute;
            content: '';
            height: 100%;
            width: 100%;
            background: ${(props) => props.theme.colors.primary};
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }
    }

    input:focus ~ .underLine::before {
        transform: scaleX(1);
    }

    .error {
        color: #ff0033;
        font-size: 1.5rem;
        padding: 0.3rem 0.8rem;
    }
`;
