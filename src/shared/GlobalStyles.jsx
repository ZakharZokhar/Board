import { Global, css } from '@emotion/core';
import { BaseFontFamily, BaseFont } from './variables';
import { BorderColor } from './colors';

const styles = css`
  * {
    vertical-align: top;
  }

  html {
    text-rendering: optimizeLegibility;
  }

  body {
    margin: 0;
    font-family: ${BaseFontFamily};
    ${BaseFont};
  }
  
  body a {
    text-decoration: none;
  }

  hr {
    border: 1px solid ${BorderColor};
  }
`;

const GlobalStyle = () => (
  <Global
    styles={styles}
  />
);

export default GlobalStyle;
