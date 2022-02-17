import PropTypes from 'prop-types';
import { DiamondIcon, CloseIcon } from '../../../shared/icons/icons';
import {
  ProjectContainer,
  HeadProject,
  RoleContainer,
  TrashButton,
  MidProject,
  BotProject,
  ProjectName,
} from './ProjectStyles';
import { HrStyled } from '../../../shared/basic-components/Hr';

function Project({ projectName, projectId, onDeleteProject, colUsersInProject }) {
  return (
    <ProjectContainer>
      <HeadProject>
        <RoleContainer>Admin</RoleContainer>
        <TrashButton
          type="submit"
          onClick={() => (onDeleteProject(projectId))}
        >
          <CloseIcon />
        </TrashButton>
      </HeadProject>
      <HrStyled />
      <MidProject>
        <DiamondIcon />
        <ProjectName>
          {projectName}
        </ProjectName>
      </MidProject>
      <HrStyled />
      <BotProject>{colUsersInProject === 1 ? `1 user` : `${colUsersInProject} users`}</BotProject>
    </ProjectContainer>
  );
}

Project.propTypes = {
  projectName: PropTypes.string,
  projectId: PropTypes.string,
  onDeleteProject: PropTypes.func,
  colUsersInProject: PropTypes.number,
};

Project.defaultProps = {
  projectName: null,
  projectId: null,
  onDeleteProject: null,
  colUsersInProject: null,
};

export default Project;
