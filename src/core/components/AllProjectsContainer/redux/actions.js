import {getProjectById, getUserById} from '../../../../services/api/user.service';

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
    console.log(userId)
    const { data } = await getUserById(userId);
    const projectIds = data.projectIds;
    console.log(projectIds);
    dispatch({...fetchProjectIdsSuccess, payload: projectIds});
  } catch (error) {
    dispatch({...fetchProjectIdsFailure, payload: error});
  }
};

export const fetchProjectById = (id) => async (dispatch) => {
  try {
    const { data } = await getProjectById(id);
    dispatch({...fetchProjectByIdSuccess, payload: data});
  } catch (error) {
    dispatch({...fetchProjectByIdFailure, payload: error});
  }
};
