import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        box-sizing: border-box;
        font-size: 62.5%;
    }
    body {
        background: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
        font: 400 1rem Roboto, sans-serif;
    }
    a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.text};
    }
    button {
        border: none;
    }
    Input{
        outline: none;
    }

    .App {
        height: 100vh;
    }

    .MainContainer {
        display: flex;
        //align-items: center;
        justify-content: center;
        max-width: 130rem;
        margin: 0 auto;
        padding-top: ${(props) => props.theme.sizes.height_header};;
        background:#FFFF;
        height: 100%;
        -ms-overflow-style: none; /* for Internet Explorer, Edge */
        scrollbar-width: none; /* for Firefox */
        overflow-y: scroll; 
    }
    .MainContainer::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
    }
    .animeLeft {
        opacity: 0;
        transform: translateX(-10rem);
        animation: anime 0.3s forwards;
    }
    .animeTop {
        opacity: 0;
        transform: translateY(-10rem);
        animation: anime 0.3s forwards;
    }
    .animeRight {
        opacity: 0;
        transform: translateX(10rem);
        animation: anime 0.3s forwards;
    }
    @keyframes anime {
        to {
        opacity: 1;
        transform: initial;
        }
    }
    @media (max-width: 768px){
        html {
            font-size: 50%;
        }
        .MainContainer {
            width: 100vw;
        }
    }
    @media (max-width: 430px){
        html {
            font-size: 40%;
        }
    }
`;
