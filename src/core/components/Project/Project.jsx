import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
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
import { openBoards } from "../BigContainerForKanban/redux/actions";
import { fetchBoardsByProjectId } from "../AllBoardsComponent/redux/actions";

function Project({ projectName, projectId, onDeleteProject }) {
  const dispatch = useDispatch();
  const onOpenBoards = () => {
    dispatch(fetchBoardsByProjectId(projectId));
    dispatch({...openBoards})
  };

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
          12 users
       <ProjectOpenButton onClick={() => (onOpenBoards())}>
           Open
       </ProjectOpenButton>
      </BotProject>
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
