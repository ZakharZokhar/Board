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
      <HrStyled />
      <MidProject>
        <DiamondIcon />
        <ProjectName>
          {projectName}
        </ProjectName>
      </MidProject>
      <HrStyled />
      <BotProject>12 users</BotProject>
    </ProjectContainer>
  );
}

Project.propTypes = {
  projectName: PropTypes.string,
  projectId: PropTypes.string,
  onDeleteProject: PropTypes.func,
};

Project.defaultProps = {
  projectName: null,
  projectId: null,
  onDeleteProject: null,
};

export default Project;
