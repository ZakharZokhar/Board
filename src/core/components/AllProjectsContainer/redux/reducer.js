import {
  togglePopUpOn,
  togglePopUpOff,
  addNewProject,
  deleteProject,
} from './actions';

function togglePopUpReducer(state = { isPopUpOpen: false }, action) {
  switch (action.type) {
    case togglePopUpOn.type:
      return {
        ...state,
        isPopUpOpen: true,
      };
    case togglePopUpOff.type:
      return {
        ...state,
        isPopUpOpen: false,
      };
    default:
      return {
        ...state,
      };
  }
}

function nextProjectId(projects) {
  const maxId = projects.reduce((curMaxId, project) => Math.max(project.id, curMaxId), -1);
  return maxId + 1;
}

function projectsReducer(state = [], action) {
  switch (action.type) {
    case addNewProject.type:
      return [
        ...state,
        {
          id: nextProjectId(state),
          name: action.payload,
          description: '',
        },
      ];
    case deleteProject.type:
      return (
        state.filter((project) => (project.id !== action.payload)));
    default:
      return [
        ...state,
      ];
  }
}

export { togglePopUpReducer, projectsReducer };
