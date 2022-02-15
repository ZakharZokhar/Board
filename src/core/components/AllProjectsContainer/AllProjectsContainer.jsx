import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddProjectButton from '../AddProjectButton';
import PopUpAddProject from '../PopUpAddProject';
import Project from '../Project';
import {
  togglePopUpOn, togglePopUpOff, deleteProject, fetchProjectById, fetchProjectIds
} from './redux/actions';
import AllProjectsHolder from './AllProjectContainerStyles';

function AllProjectsContainer() {
  const dispatch = useDispatch();
  const projectIds = useSelector((state) => state.projectIds.ids)
  const projects = useSelector((state) => (state.project));
  const isOpen = useSelector((state) => (state.popup.isPopUpOpen));
  const onGetProjectsById = (ids) => {
    Promise.all(ids.map((id) => dispatch(fetchProjectById(id))))
    console.log(ids);
  }
  useEffect(() => {
    onGetProjectsById(projectIds);
    console.log('getting');
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
  const onDeleteProject = (id) => (dispatch({ ...deleteProject, payload: id }));

  return (
    <AllProjectsHolder>
      <AddProjectButton onAddClick={showPopUp} />
      {projects.map((project) => (
        <Project
          key={project._id}
          projectName={project.name}
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
