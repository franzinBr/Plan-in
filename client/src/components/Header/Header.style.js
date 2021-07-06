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
            font-size: 4rem;
            h1 {
                color: ${(props) => props.theme.colors.text};
            }

            span {
                color: ${(props) => props.theme.colors.primary};
            }
        }

        .links {
            display: flex;
            font-size: 2rem;

            p {
                position: relative;
                margin-right: 2rem;
                color: ${(props) => props.theme.colors.text};
                cursor: pointer;
            }

            p::after {
                content: '';
                position: absolute;
                width: 0;
                height: 3px;
                bottom: -20%;
                left: 0;
                background: ${(props) => props.theme.colors.primary};
                transition: all 0.3s ease-in;
            }

            p:hover {
                color: ${(props) => props.theme.colors.text_second};
            }

            p:hover::after {
                width: 100%;
            }
        }
    }
`;
