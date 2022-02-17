import {getProjectById, getProjects, getUserById, getUsers} from '../../../../services/api/user.service';

export const togglePopUpOn = { type: 'TOGGLE_POPUP_ON' };

export const togglePopUpOff = { type: 'TOGGLE_POPUP_OFF' };

export const addNewProject = { type: 'ADD_NEW_PROJECT' };

export const deleteProject = { type: 'DELETE_PROJECT' };

export const fetchProjectByIdSuccess = { type: 'GET_PROJECT_BY_ID_SUCCESS' };

export const fetchProjectByIdFailure = { type: 'GET_PROJECT_BY_ID_FAILURE' };

export const fetchProjectIdsSuccess = { type: 'GET_PROJECT_IDS_SUCCESS' };

export const fetchProjectIdsFailure = { type: 'GET_PROJECT_IDS_FAILURE' };

export const addProjectId = { type: 'ADD_PROJECT_ID' };

export const displayWarningEmptyName = { type: 'DISPLAY_WARNING_EMPTY_NAME_FIELD' };

export const hideWarningEmptyName = { type: 'HIDE_WARNING_EMPTY_NAME_FIELD' };

export const displayWarningLongDescription = { type: 'DISPLAY_WARNING_LONG_DESCRIPTION' };

export const hideWarningLongDescription = { type: 'HIDE_WARNING_LONG_DESCRIPTION' };

export const displayWarningLongName = { type: 'DISPLAY_WARNING_LONG_NAME' };

export const hideWarningLongName = { type: 'HIDE_WARNING_LONG_NAME' };

export const fetchProjectIds = () => async (dispatch) => {
  try {
    const { userId } = JSON.parse(localStorage.getItem('tokens'));
    const { data } = await getUserById(userId);
    const userProjectIds = data.projectIds;
    const allProjects = await getProjects();
    const allProjectsIds = allProjects.data.map((project) => project._id);
    const correctIds = userProjectIds.filter((id) => allProjectsIds.includes(id));
    dispatch({...fetchProjectIdsSuccess, payload: correctIds});
  } catch (error) {
    dispatch({...fetchProjectIdsFailure, payload: error});
  }
};

export const fetchProjectById = (id) => async (dispatch) => {
  try {
    const { data } = await getProjectById(id);
    const allUsers = await getUsers();
    data.colUsers = allUsers.data.reduce((colUsersHaveProject, currentUser) => {
      const userHaveProject = currentUser.projectIds.includes(id);
      return userHaveProject ? colUsersHaveProject + 1 : colUsersHaveProject;
    }, 0);
    dispatch({...fetchProjectByIdSuccess, payload: data});
  } catch (error) {
    dispatch({...fetchProjectByIdFailure, payload: error});
  }
};
