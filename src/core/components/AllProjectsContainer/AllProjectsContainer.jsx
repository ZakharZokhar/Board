import { useSelector, useDispatch } from 'react-redux';
import AddProjectButton from '../AddProjectButton';
import PopUpAddProject from '../PopUpAddProject';
import Project from '../Project';
import {
  togglePopUpOn, togglePopUpOff, deleteProject, addNewProject,
} from './redux/actions';
import AllProjectsHolder from './AllProjectContainerStyles';

function AllProjectsContainer() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => (state.popup.isPopUpOpen));
  const projects = useSelector((state) => (state.project));
  const showPopUp = () => {
    dispatch(togglePopUpOn);
  };
  const closePopUp = () => {
    dispatch(togglePopUpOff);
  };
  const onAddNewProject = (name) => {
    dispatch({ ...addNewProject, payload: name });
    dispatch(togglePopUpOff);
  };
  const onDeleteProject = (id) => (dispatch({ ...deleteProject, payload: id }));

  return (
    <AllProjectsHolder>
      <AddProjectButton onAddClick={showPopUp} />
      {projects.map((project) => (
        <Project
          key={project.id}
          projectName={project.name}
          projectId={project.id}
          onDeleteProject={onDeleteProject}
        />
      ))}
      {isOpen
        && (
          <PopUpAddProject
            onCloseClick={closePopUp}
            onCreateClick={onAddNewProject}
          />
        )}
    </AllProjectsHolder>
  );
}

export default AllProjectsContainer;
