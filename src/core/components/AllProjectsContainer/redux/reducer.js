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
import {createProject, getUsers, updateUserProjectsIds} from '../../../../services/api/user.service';

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
      console.log(action.payload);
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
    console.log(data._id);
    //Until the API returns an id
    const users = await getUsers();
    const login = localStorage.getItem('login')
    const userId = users.data.filter((user) => (user.email === login)).map((user) => (user._id));
    console.log(userId);
    await updateUserProjectsIds(userId, data._id);
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
      console.log(action.payload);
      return [
        ...state,
      ];
    case addNewProject.type:
      updateId(action.payload);
      console.log(action.payload);
      return  [
        ...state,
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
