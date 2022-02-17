import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddProjectButton from '../AddProjectButton';
import PopUpAddProject from '../PopUpAddProject';
import Project from '../Project';
import {
  togglePopUpOn, togglePopUpOff, deleteProject, fetchProjectById, fetchProjectIds,
  hideWarningEmptyName, hideWarningLongDescription, hideWarningLongName,
} from './redux/actions';
import AllProjectsHolder from './AllProjectContainerStyles';

function AllProjectsContainer() {
  const dispatch = useDispatch();
  const projectIds = useSelector((state) => state.projectIds.ids)
  const projects = useSelector((state) => (state.project));
  const isOpen = useSelector((state) => (state.popup.isPopUpOpen));
  const onGetProjectsById = (ids) => {
    Promise.all(ids.map((id) => dispatch(fetchProjectById(id))))
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
    dispatch(hideWarningEmptyName);
    dispatch(hideWarningLongDescription);
    dispatch(hideWarningLongName);
    dispatch(togglePopUpOff);
  };
  const onDeleteProject = (id) => (dispatch({ ...deleteProject, payload: id }));

  return (
    <AllProjectsHolder>
      <AddProjectButton
        onAddClick={showPopUp}
        buttonName={'Add new project'}
      />
      {projects.map((project) => (
        <Project
          key={project._id}
          projectName={project.name.length < 52 ? project.name : `${project.name.substring(0, 52)}...` }
          projectId={project._id}
          onDeleteProject={onDeleteProject}
        />
      ))}
      {isOpen
        && (
          <PopUpAddProject
            onCloseClick={closePopUp}
          />
        )}
    </AllProjectsHolder>
  );
}

export default AllProjectsContainer;
