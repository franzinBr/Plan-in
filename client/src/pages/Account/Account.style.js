import styled from 'styled-components';

export const AccountContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .image {
        width: 50rem;
        flex: 2;
    }

    .forms {
        flex: 1 2;
        padding: 1rem 2rem;
        width: 50rem;

        .error {
            color: red;
            padding-top: 1rem;
            font-size: 1.8rem;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        .image,
        .forms {
            flex: 1;
        }
    }
`;
