import styled from 'styled-components';

export const Class = styled.div`
    //border: 1.8px solid ${(props) => props.theme.colors.primary_plus};
    border-radius: 1rem;
    height: 50rem;
    display: grid;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    grid-template-rows: 1fr 2fr 2fr 1fr;
    cursor: pointer;
    transition: all 0.2s linear;

    .title {
        grid-row: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 1rem 1rem 0 0;
        background: rgba(0, 0, 0, 0.05);
        /*border-bottom: 1px solid ${(props) =>
            props.theme.colors.primary_plus};*/
        margin-bottom: 0.5rem;

        h1 {
            color: ${(props) => props.theme.colors.primary};
            font-size: 4rem;
            text-align: center;
            padding: 0rem 2rem;

            border-radius: 1rem;
            border-bottom: 3px solid
                ${(props) => props.theme.colors.primary_plus};
        }
    }

    .thumb {
        grid-row: 2 / 4;
        svg {
            height: 100%;
            width: 100%;
        }
    }

    .date {
        //border-top: 1px solid ${(props) => props.theme.colors.primary_plus};
        grid-row: 4;
        border-radius: 0 0 1rem 1rem;
        background: rgba(0, 0, 0, 0.05);

        display: flex;
        align-items: center;
        justify-content: center;

        .calendar {
            width: 8%;
            height: 100%;
            margin-right: 0.8rem;
            svg {
                width: 100%;
                height: 100%;
            }
        }

        p {
            font-size: 2rem;
            color: ${(props) => props.theme.colors.primary_plus};
            font-weight: 700;
        }
    }

    &:hover {
        border: 4px solid ${(props) => props.theme.colors.primary};
    }

    @media (max-width: 520px) {
        height: 70rem;
        .title {
            h1 {
                font-size: 5rem;
            }
        }

        .date {
            p {
                font-size: 2.5rem;
            }
        }
    }
`;
