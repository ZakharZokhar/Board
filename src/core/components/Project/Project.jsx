import PropTypes from 'prop-types';
import { Link} from "react-router-dom";
import { DiamondIcon, CloseIcon } from '../../../shared/icons/icons';
import {
    ProjectContainer,
    HeadProject,
    RoleContainer,
    TrashButton,
    MidProject,
    BotProject,
    ProjectName, ProjectOpenButton,

} from './ProjectStyles';
import { HrStyled } from '../../../shared/basic-components/Hr';

function Project({ projectName, projectId, onDeleteProject, numUsersInProject }) {

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
      <BotProject>
        {numUsersInProject === 1 ? `1 user` : `${numUsersInProject} users`}
        <Link to={`/projects/${projectId}`}>
          <ProjectOpenButton>
            Open
          </ProjectOpenButton>
        </Link>
      </BotProject>
    </ProjectContainer>
  );
}

Project.propTypes = {
  projectName: PropTypes.string,
  projectId: PropTypes.string,
  onDeleteProject: PropTypes.func,
  numUsersInProject: PropTypes.number,
};

Project.defaultProps = {
  projectName: null,
  projectId: null,
  onDeleteProject: null,
  numUsersInProject: null,
};

export default Project;
