import {
  togglePopUpOn,
  togglePopUpOff,
  addNewProject,
  deleteProject,
  fetchProjectByIdSuccess,
  fetchProjectByIdFailure,
  fetchProjectIdsSuccess,
  fetchProjectIdsFailure,
  addProjectId,
  displayWarningEmptyName,
  hideWarningEmptyName,
  displayWarningLongDescription,
  hideWarningLongDescription,
  displayWarningLongName,
  hideWarningLongName,
} from './actions';
import {
  createProject, updateUserProjectsIds, getUserById, deleteProjectById
} from '../../../../services/api/user.service';

function warningPopUpReducer(state = {
  emptyName: false,
  longDescription: false,
  longName: false,
}, action) {
  switch (action.type) {
    case displayWarningEmptyName.type:
      return {
        ...state,
        emptyName: true,
      };
    case hideWarningEmptyName.type:
      return {
        ...state,
        emptyName: false,
      };
    case displayWarningLongDescription.type:
      return {
        ...state,
        longDescription: true,
      };
    case hideWarningLongDescription.type:
      return {
        ...state,
        longDescription: false,
      };
    case displayWarningLongName.type:
      return {
        ...state,
        longName: true,
      };
    case hideWarningLongName.type:
      return {
        ...state,
        longName: false,
      };
    default:
      return {
        ...state,
      };
  }
}

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
    case addProjectId.type:
      return {
      ...state,
      ids: [...state.ids, action.payload]
    }
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

function isProjectAlreadyHere(projects, potentialProject) {
  const ids = projects.map((project) => project._id);
  return ids.includes(potentialProject._id)
}

async function updateId (project) {
  try {
    const { data } = await createProject(project);
    const { userId } = JSON.parse(localStorage.getItem('tokens'));
    const user = await getUserById(userId)
    const projectIds= user.data.projectIds
    await updateUserProjectsIds(userId, [...projectIds, data._id]);
  } catch (error) {
    console.log(error);
  }
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
      ];
    case addNewProject.type:
      updateId(action.payload);
      return  [
        ...state,
      ];
    case deleteProject.type:
      deleteProjectById(action.payload);
      return state.filter((project) => project._id !== action.payload);
    default:
      return [
        ...state,
      ];
  }
}

export {
  togglePopUpReducer, projectsReducer, projectIdsReducer,
  warningPopUpReducer,
};
