import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    z-index: 100;
    width: 100%;
    background: ${(props) => props.theme.colors.header};
    height: ${(props) => props.theme.sizes.height_header};
    nav {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;

        .logo {
            font-size: 3rem;
            h1 {
                color: ${(props) => props.theme.colors.text};
            }

            span {
                color: ${(props) => props.theme.colors.primary};
            }
        }

        .links {
            display: flex;
            font-size: 1.8rem;

            p {
                margin-left: 0.5rem;
                cursor: pointer;
            }
        }
    }
`;
