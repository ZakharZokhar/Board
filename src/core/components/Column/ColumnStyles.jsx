import styled from '@emotion/styled';
import { RoleColor, MainBlueColor } from "../../../shared/colors";
import { BaseFontFamily } from "../../../shared/variables";

const ColumnStyle = styled('div')`
  margin: 15px 15px 15px 15px;
  padding: 5px;
  background-color: ${RoleColor};
  box-sizing: border-box;
  border-radius: 8px;
  width: 320px;
`;
const ColumnHeader = styled('div')`
  position: relative;
  height: 30px;
`;

const CloseButton = styled('button')`
  position: absolute;
  top: 2px;
  right: 10px;
  background: ${RoleColor};
  border: none;
    
  &:hover {
  cursor: pointer;
  }
`;

const ColumnName = styled('div')`
  margin-top: 8px;
  margin-left: 5px;
`;

const ColumnFooter = styled('div')`
  margin-top: 15px;
  height: 30px;
`;

const AddTaskButton = styled('button')`
  height: 30px;
  font-family: ${BaseFontFamily};
  color: ${MainBlueColor};
  border: none;
  margin-left: 75px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export {
  ColumnStyle, ColumnName, CloseButton, ColumnHeader, ColumnFooter,
  AddTaskButton,
};