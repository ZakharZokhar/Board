import PropTypes from 'prop-types';
import { BsTrash } from 'react-icons/bs';
import { FcLikePlaceholder } from 'react-icons/fc';
import {
  ProjectContainer, HeadProject, RoleContainer, TrashButton, MidProject, Icon, BotProject,
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
          <BsTrash />
        </TrashButton>
      </HeadProject>
      <hr />
      <MidProject>
        <Icon>
          <FcLikePlaceholder />
        </Icon>
        {projectName}
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
