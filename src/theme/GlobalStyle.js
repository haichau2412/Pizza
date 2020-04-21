import { createGlobalStyle } from 'styled-components';

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
        background-image: linear-gradient(to right bottom, ${props => props.theme.colors.darkRed},${props => props.theme.colors.darkYellow} );
        background-size: cover;
        background-repeat: no-repeat;
        min-height: 100vh;
    }
`;

export default GlobalStyle;