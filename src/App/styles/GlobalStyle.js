import { createGlobalStyle } from 'styled-components';
import wallpaper from '../assets/wallpaper.jpg';

const GlobalStyle = createGlobalStyle`

    *,
    *::before,
    *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit; 
    }

    html {
    box-sizing: border-box;
    font-size: 62.5%; 
    }
    body {
        line-height: 1.6rem;
        background-image: url(${wallpaper});
        background-repeat: repeat;
        
        background-size: 30rem 30rem;
        min-height: 100vh;
        font-weight: 500;
    }
    /* #root {
        height: 100vh;
    } */
`;

export default GlobalStyle;