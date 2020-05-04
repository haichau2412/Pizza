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
    width: 100vw;
    }
    body {
        line-height: 1.6rem;
        background-color: ${(props) => props.theme.colors.primary};
    }
`;

export default GlobalStyle;