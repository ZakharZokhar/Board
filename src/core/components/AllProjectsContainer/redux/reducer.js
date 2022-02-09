import { handleActions } from 'redux-actions';
import {
  fetchUsersRequest,
  fetchUsersPriceSuccess,
  fetchUsersPriceFailure,
  togglePopUpOn,
  togglePopUpOff,
  addNewProject,
  deleteProject,
  showProjects,
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
    case showProjects.type:
      return [
        ...state,
        action.payload,
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

const defaultUsersState = {
  users: [],
  error: null,
  isFetching: false,
};

const defaultFetchReducer = (state) => ({
  ...state,
  isFetching: true,
});

const defaultSuccessReducer = (state, { payload }) => ({
  ...state,
  ...payload,
  isFetching: false,
  error: null,
});

const defaultFailureReducer = (state, { payload }) => ({
  ...state,
  isFetching: false,
  error: payload,
});

const usersReducer = handleActions(
  {
    [fetchUsersRequest]: defaultFetchReducer,
    [fetchUsersPriceSuccess]: defaultSuccessReducer,
    [fetchUsersPriceFailure]: defaultFailureReducer,
  },
  defaultUsersState,
);

export { togglePopUpReducer, projectsReducer, usersReducer };
