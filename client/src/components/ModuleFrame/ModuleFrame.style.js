import styled from 'styled-components';

export const Module = styled.div`
    padding: 0.8rem 0.3rem;
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    align-items: center;
    border-radius: 1rem;
    border: 1.8px solid ${(props) => props.theme.colors.primary_plus};
    cursor: pointer;
    transition: all 0.3s ease;

    svg {
        width: 100%;
        transition: all 0.3s ease;
        stroke: ${(props) => props.theme.colors.primary};

        rect {
            transition: all 0.3s ease;
            fill: ${(props) => props.theme.colors.primary};
        }

        path {
            transition: all 0.3s ease;
            stroke: ${(props) => props.theme.colors.primary_plus};
        }
    }

    .content {
        display: flex;
        flex-direction: column;

        h1 {
            color: ${(props) => props.theme.colors.primary};
            font-size: 2.3rem;
            padding-bottom: 0.2rem;
        }

        p {
            font-size: 1.8rem;
            color: ${(props) => props.theme.colors.text};
            font-weight: 500;
        }
    }

    &:hover {
        border-color: ${(props) => props.theme.colors.primary};
        svg rect {
            fill: ${(props) => props.theme.colors.primary_plus};
        }
        svg path {
            stroke: ${(props) => props.theme.colors.primary};
        }
    }
`;
