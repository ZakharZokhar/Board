import { useSelector, useDispatch } from 'react-redux';
import AddProjectButton from '../AddProjectButton';
import PopUpAddProject from '../PopUpAddProject';
import Project from '../Project';
import { togglePopUpOn, togglePopUpOff } from './redux/actions';
import AllProjectsContainer from './AllProjectHolderStyles';

function AllProjectsHolder() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => (state.popup.isPopUpOpen));
  const projects = useSelector((state) => (state.project));
  const showPopUp = () => {
    dispatch(togglePopUpOn);
  };
  const closePopUp = () => {
    dispatch(togglePopUpOff);
  };
  const addNewProject = (name) => {
    dispatch({ type: 'ADD_NEW_PROJECT', payload: name });
    dispatch(togglePopUpOff);
  };
  const deleteProject = (id) => (dispatch({ type: 'DELETE_PROJECT', payload: id }));
  return (
    <AllProjectsContainer>
      <AddProjectButton onAddClick={showPopUp} />
      {projects.map((project) => (
        <Project
          key={project.id}
          projectName={project.name}
          projectId={project.id}
          onDeleteProject={deleteProject}
        />
      ))}
      {isOpen
        && (
          <PopUpAddProject
            onCloseClick={closePopUp}
            onCreateClick={addNewProject}
          />
        )}
    </AllProjectsContainer>
  );
}

export default AllProjectsHolder;
