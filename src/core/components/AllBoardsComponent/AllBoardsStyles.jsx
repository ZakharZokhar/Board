import styled from '@emotion/styled';
import {blueButtonForProjects} from "../../../shared/basic-components/Buttons";

const BoardsContainer = styled('div')`
  position: absolute;
`;

const AllBoardsHolder = styled('div')`
  vertical-align: top;
`;

const BoardProjectName = styled('div')`
    padding: 20px;
    font-size: 18px;
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

export { AllBoardsHolder, BackToProjectsButton, BoardsContainer,BoardProjectName };
