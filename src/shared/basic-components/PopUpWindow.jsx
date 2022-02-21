import { css } from '@emotion/core';
import {BackgroundWhiteColor, BorderColor} from "../colors";

export const PopUpWindow = css`
  position: relative;
  width: 300px;
  margin: calc(100vh - 85vh - 20px) auto 0;
  max-height: 70vh;
  background: ${BackgroundWhiteColor};
  border-radius: 8px;
  padding: 20px;
  border: 1px solid ${BorderColor};
  overflow: auto;
  font-weight: 600;
`;
