import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { MainBlueColor, BackgroundWhiteColor} from "../colors";

const defaultButtonStyles = css`
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  outline: none;
  border: 0;
  &:hover {
    cursor: pointer;
  }
`;

export const blueButtonForProjects = css`
  background: ${MainBlueColor};
  border-radius: 8px;
  color: ${BackgroundWhiteColor};
  border: none;

  &:hover {
    color: ${MainBlueColor};
    cursor: pointer;
    background: ${BackgroundWhiteColor};
    border: 1px solid ${MainBlueColor};
  }
`;

export const Button = styled('button')`
  ${defaultButtonStyles};
`;

export const OutlineButton = styled('button')`
  ${defaultButtonStyles};
  border: 1px solid #000;
  background-color: transparent;
`;
