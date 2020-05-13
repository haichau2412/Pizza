import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Roboto';
    src: url('../assets/Roboto/Roboto-Regular-webfont.eot');
    src: url('../assets/Roboto/Roboto-Regular-webfont.eot?#iefix') format('embedded-opentype'),
         url('../assets/Roboto/Roboto-Regular-webfont.woff') format('woff'),
         url('../assets/Roboto/Roboto-Regular-webfont.ttf') format('truetype'),
         url('../assets/Roboto/Roboto-Regular-webfont.svg#RobotoRegular') format('svg');
    font-weight: normal;
    font-style: normal;
}
 
@font-face {
    font-family: 'Roboto';
    src: url('../assets/Roboto/Roboto-Italic-webfont.eot');
    src: url('../assets/Roboto/Roboto-Italic-webfont.eot?#iefix') format('embedded-opentype'),
         url('../assets/Roboto/Roboto-Italic-webfont.woff') format('woff'),
         url('../assets/Roboto/Roboto-Italic-webfont.ttf') format('truetype'),
         url('../assets/Roboto/Roboto-Italic-webfont.svg#RobotoItalic') format('svg');
    font-weight: normal;
    font-style: italic;
}
 
@font-face {
    font-family: 'Roboto';
    src: url('../assets/Roboto/Roboto-Bold-webfont.eot');
    src: url('../assets/Roboto/Roboto-Bold-webfont.eot?#iefix') format('embedded-opentype'),
         url('../assets/Roboto/Roboto-Bold-webfont.woff') format('woff'),
         url('../assets/Roboto/Roboto-Bold-webfont.ttf') format('truetype'),
         url('../assets/Roboto/Roboto-Bold-webfont.svg#RobotoBold') format('svg');
    font-weight: bold;
    font-style: normal;
}
 
@font-face {
    font-family: 'Roboto';
    src: url('../assets/Roboto/Roboto-BoldItalic-webfont.eot');
    src: url('../assets/Roboto/Roboto-BoldItalic-webfont.eot?#iefix') format('embedded-opentype'),
         url('../assets/Roboto/Roboto-BoldItalic-webfont.woff') format('woff'),
         url('../assets/Roboto/Roboto-BoldItalic-webfont.ttf') format('truetype'),
         url('../assets/Roboto/Roboto-BoldItalic-webfont.svg#RobotoBoldItalic') format('svg');
    font-weight: bold;
    font-style: italic;
}
 
@font-face {
    font-family: 'Roboto';
    src: url('../assets/Roboto/Roboto-Thin-webfont.eot');
    src: url('../assets/Roboto/Roboto-Thin-webfont.eot?#iefix') format('embedded-opentype'),
         url('../assets/Roboto/Roboto-Thin-webfont.woff') format('woff'),
         url('../assets/Roboto/Roboto-Thin-webfont.ttf') format('truetype'),
         url('../assets/Roboto/Roboto-Thin-webfont.svg#RobotoThin') format('svg');
    font-weight: 200;
    font-style: normal;
}
 
@font-face {
    font-family: 'Roboto';
    src: url('../assets/Roboto/Roboto-ThinItalic-webfont.eot');
    src: url('../assets/Roboto/Roboto-ThinItalic-webfont.eot?#iefix') format('embedded-opentype'),
         url('../assets/Roboto/Roboto-ThinItalic-webfont.woff') format('woff'),
         url('../assets/Roboto/Roboto-ThinItalic-webfont.ttf') format('truetype'),
         url('../assets/Roboto/Roboto-ThinItalic-webfont.svg#RobotoThinItalic') format('svg'); (under the Apache Software License). 
    font-weight: 200;
    font-style: italic;
}
 
@font-face {
    font-family: 'Roboto';
    src: url('../assets/Roboto/Roboto-Light-webfont.eot');
    src: url('../assets/Roboto/Roboto-Light-webfont.eot?#iefix') format('embedded-opentype'),
         url('../assets/Roboto/Roboto-Light-webfont.woff') format('woff'),
         url('../assets/Roboto/Roboto-Light-webfont.ttf') format('truetype'),
         url('../assets/Roboto/Roboto-Light-webfont.svg#RobotoLight') format('svg');
    font-weight: 100;
    font-style: normal;
}
 
@font-face {
    font-family: 'Roboto';
    src: url('../assets/Roboto/Roboto-LightItalic-webfont.eot');
    src: url('../assets/Roboto/Roboto-LightItalic-webfont.eot?#iefix') format('embedded-opentype'),
         url('../assets/Roboto/Roboto-LightItalic-webfont.woff') format('woff'),
         url('../assets/Roboto/Roboto-LightItalic-webfont.ttf') format('truetype'),
         url('../assets/Roboto/Roboto-LightItalic-webfont.svg#RobotoLightItalic') format('svg');
    font-weight: 100;
    font-style: italic;
}
 
@font-face {
    font-family: 'Roboto';
    src: url('../assets/Roboto/Roboto-Medium-webfont.eot');
    src: url('../assets/Roboto/Roboto-Medium-webfont.eot?#iefix') format('embedded-opentype'),
         url('../assets/Roboto/Roboto-Medium-webfont.woff') format('woff'),
         url('../assets/Roboto/Roboto-Medium-webfont.ttf') format('truetype'),
         url('../assets/Roboto/Roboto-Medium-webfont.svg#RobotoMedium') format('svg');
    font-weight: 300;
    font-style: normal;
}
 
@font-face {
    font-family: 'Roboto';
    src: url('../assets/Roboto/Roboto-MediumItalic-webfont.eot');
    src: url('../assets/Roboto/Roboto-MediumItalic-webfont.eot?#iefix') format('embedded-opentype'),
         url('../assets/Roboto/Roboto-MediumItalic-webfont.woff') format('woff'),
         url('../assets/Roboto/Roboto-MediumItalic-webfont.ttf') format('truetype'),
         url('../assets/Roboto/Roboto-MediumItalic-webfont.svg#RobotoMediumItalic') format('svg');
    font-weight: 300;
    font-style: italic;
}
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
        background-color: ${props => props.theme.colors.background};
        min-height: 100vh;
        font-family: 'Roboto';
    }
    /* #root {
        height: 100vh;
    } */
`;

export default GlobalStyle;