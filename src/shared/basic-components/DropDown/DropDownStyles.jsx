import styled from '@emotion/styled';
import {RoleColor} from "../../colors";

const DropInput = styled('input')`
  box-sizing: border-box;
  font-size: 16px;
`;

const Dropdown = styled('div')`
  position: relative;
  display: block;  
`;

const DropContent = styled('div')`
  background-color: ${RoleColor};
  display: none;
  position: absolute;
  min-width: 230px;
  z-index: 1;
`;

const DropElement = styled('div')`
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export { DropElement, DropInput, Dropdown, DropContent };
