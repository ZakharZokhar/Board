import styled from '@emotion/styled';
import {blueButtonForProjects} from "../../../shared/basic-components/Buttons";

const AllBoardsHolder = styled('div')`
  vertical-align: top;
`;

const BackToProjectsButton = styled('button')`
  ${blueButtonForProjects};
  margin-left: 15px;
  box-sizing: border-box;
  align-items: center;
  padding: 0 16px;
  width: 150px;
  height: 20px;

`;

export { AllBoardsHolder, BackToProjectsButton };
