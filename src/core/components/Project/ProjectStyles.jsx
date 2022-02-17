import styled from '@emotion/styled';
import {
  BorderColor,
  MainBlueColor,
  BackgroundWhiteColor,
  RoleColor,
} from '../../../shared/colors';

const ProjectContainer = styled('div')`
  display: inline-block;
  position: relative;
  width: 250px;
  height: 170px;
  margin: 15px 15px 15px 15px;
  padding: 7px;
  border: 1px solid ${BorderColor};
  box-sizing: border-box;
  border-radius: 8px;
`;

const HeadProject = styled('div')`
  padding-bottom: 5%;
`;

const RoleContainer = styled('div')`
  display: inline-block;
  align-items: center;
  padding: 3px 8px;
  background: ${RoleColor};
  border-radius: 4px;
  font-size: 12px;
`;

const TrashButton = styled('button')`
  position: absolute;
  right: 5px;
  background: ${BackgroundWhiteColor};
  border: none;
    
  &:hover {
  cursor: pointer;
  }
`;

const MidProject = styled('div')`
  line-height: 20px;
  display: flex;
  align-items: center;
  padding: 7% 0 7% 0;
`;

const ProjectName = styled('div')`
  width: 210px;
  word-break: break-word;
  position: absolute;
  left: 30px;
`;

const BotProject = styled('div')`
  padding-top: 10px;
  color: ${MainBlueColor};
`;

export {
  ProjectContainer, HeadProject, RoleContainer, TrashButton, MidProject, BotProject, ProjectName,
};
