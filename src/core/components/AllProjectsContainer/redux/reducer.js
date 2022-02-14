import {
  togglePopUpOn,
  togglePopUpOff,
  addNewProject,
  deleteProject,
  fetchProjectByIdSuccess,
  fetchProjectByIdFailure,
  fetchProjectIdsSuccess,
  fetchProjectIdsFailure,
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

function projectIdsReducer(state={ids:[], error:null}, action) {
  switch (action.type) {
    case fetchProjectIdsSuccess.type:
      return {
        ...state,
        ids: action.payload,
      };
    case fetchProjectIdsFailure.type:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return {
        ...state
      }
  }
}

function nextProjectId(projects) {
  const maxId = projects.reduce((curMaxId, project) => Math.max(project.id, curMaxId), -1);
  return maxId + 1;
}

function isProjectAlreadyHere(projects, potentialProject) {
  const ids = projects.map((project) => project._id);
  return ids.includes(potentialProject._id)
}

function projectsReducer(state = [], action) {
  switch (action.type) {
    case fetchProjectByIdSuccess.type:
      return isProjectAlreadyHere(state, action.payload) ?
      [
        ...state,
      ] :
      [
        ...state,
        action.payload
      ]
    case fetchProjectByIdFailure.type:
      return [
        ...state,
        {
          id: nextProjectId(state),
          name: action.payload,
          description: '',
        },
      ];
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

export { togglePopUpReducer, projectsReducer, projectIdsReducer };
