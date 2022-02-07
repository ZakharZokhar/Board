import styled from '@emotion/styled';

const ProjectContainer = styled('div')`
  display: inline-block;
  position: relative;
  width: 250px;
  height: 170px;
  margin: 15px 15px 15px 15px;
  padding: 7px;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 8px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
`;

const HeadProject = styled('div')`
  padding-bottom: 5%;
`;

const RoleContainer = styled('div')`
  display: inline-block;
  align-items: center;
  padding: 3px 8px;
  background: #f2f2f2;
  border-radius: 4px;
  font-size: 12px;
`;

const TrashButton = styled('button')`
  position: absolute;
  right: 5px;
  color: #bfbfbf;
  background: white;
  border: none;
  font-size: 20px;
    
  &:hover {
  cursor: pointer;
  color: #8a8282;
  }
`;

const MidProject = styled('div')`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #262626;
  padding: 10% 0 10% 0;
`;

const Icon = styled('span')`
  padding-right: 5px;
  font-size: 20px;
`;

const BotProject = styled('div')`
  font-weight: normal;
  font-size: 14px;
  padding-top: 10px;
  color: blue;
`;

export {
  ProjectContainer, HeadProject, RoleContainer, TrashButton, MidProject, Icon, BotProject,
};
