import styled from "@emotion/styled";
import {BaseFontFamily} from "../../../shared/variables";
import {MainBlueColor} from "../../../shared/colors";

const AddColumnButtonStyles = styled('button')`
  height: 30px;
  width: 250px;
  margin-top: 15px;
  margin-left: 15px;
  font-family: ${BaseFontFamily};
  color: ${MainBlueColor};
  border: none;
  box-sizing: border-box;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export default AddColumnButtonStyles;
