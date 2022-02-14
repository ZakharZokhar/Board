import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddProjectButton from '../AddProjectButton';
import PopUpAddProject from '../PopUpAddProject';
import Project from '../Project';
import {
  togglePopUpOn, togglePopUpOff, deleteProject, addNewProject, fetchProjectById, fetchProjectIds
} from './redux/actions';
import AllProjectsHolder from './AllProjectContainerStyles';

function AllProjectsContainer() {
  const dispatch = useDispatch();
  const projectIds = useSelector((state) => state.projectids.ids)
  const projects = useSelector((state) => (state.project));
  const isOpen = useSelector((state) => (state.popup.isPopUpOpen));
  const onGetProjectsById = (ids) => {
    ids.forEach((id) => dispatch(fetchProjectById(id)));
  }
  useEffect(() => {
    onGetProjectsById(projectIds);
  }, [projectIds]);
  useEffect(() => {
    dispatch(fetchProjectIds());
  }, []);
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
