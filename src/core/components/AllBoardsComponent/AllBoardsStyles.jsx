import styled from '@emotion/styled';
import {blueButtonForProjects} from "../../../shared/basic-components/Buttons";

const BoardsContainer = styled('div')`
  position: absolute;
`;

const AllBoardsHolder = styled('div')`
  vertical-align: top;
`;

const BoardProjectName = styled('div')`
    padding: 15px;
    font-size: 18px;
`;

const BoardProjectDescription = styled('div')`
    padding:  0 15px 15px 15px;
    font-size: 14px;
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

export {
  AllBoardsHolder, BackToProjectsButton, BoardsContainer, BoardProjectName, BoardProjectDescription,
};
