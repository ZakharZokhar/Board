import { Global, css } from '@emotion/core';
import { fontFamily, fontSize } from './variables';

const styles = css`
  * {
    vertical-align: top;
  }

  html {
    text-rendering: optimizeLegibility;
  }

  body {
    margin: 0;
    font-size: ${fontSize};
    font-family: ${fontFamily};
  }

  hr {
    border: 1px solid #e5e5e5;
  }
`;

const GlobalStyle = () => (
  <Global
    styles={styles}
  />
);

export default GlobalStyle;
