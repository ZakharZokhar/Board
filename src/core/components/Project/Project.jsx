import PropTypes from 'prop-types';
import { DiamondIcon, CloseIcon } from '../../../shared/icons/icons';
import {
  ProjectContainer, HeadProject, RoleContainer, TrashButton, MidProject, BotProject, ProjectName,
} from './ProjectStyles';

function Project({ projectName, projectId, onDeleteProject }) {
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
      <hr />
      <MidProject>
        <DiamondIcon />
        <ProjectName>
          {projectName}
        </ProjectName>
      </MidProject>
      <hr />
      <BotProject>12 users</BotProject>
    </ProjectContainer>
  );
}

Project.propTypes = {
  projectName: PropTypes.string,
  projectId: PropTypes.number,
  onDeleteProject: PropTypes.func,
};

Project.defaultProps = {
  projectName: null,
  projectId: null,
  onDeleteProject: null,
};

export default Project;
