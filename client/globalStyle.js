import { createGlobalStyle } from 'styled-components';
import path from 'path';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "DIN Pro";
    src: url(${path.resolve('./fonts/DINPro-Medium.ttf')}) format('truetype');
  }
`

export default GlobalStyle
