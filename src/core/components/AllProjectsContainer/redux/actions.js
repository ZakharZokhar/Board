import { getProjectById, getUsers } from '../../../../services/api/user.service';

export const togglePopUpOn = { type: 'TOGGLE_POPUP_ON' };

export const togglePopUpOff = { type: 'TOGGLE_POPUP_OFF' };

export const addNewProject = { type: 'ADD_NEW_PROJECT' };

export const deleteProject = { type: 'DELETE_PROJECT' };

export const fetchProjectByIdSuccess = { type: 'GET_PROJECT_BY_ID_SUCCESS' };

export const fetchProjectByIdFailure = { type: 'GET_PROJECT_BY_ID_FAILURE' };

export const fetchProjectIdsSuccess = { type: 'GET_PROJECT_IDS_SUCCESS' };

export const fetchProjectIdsFailure = { type: 'GET_PROJECT_IDS_FAILURE' };

export const fetchProjectIds = () => async (dispatch) => {
  try {
    //Until the API returns an id
    const { data } = await getUsers();
    const login = localStorage.getItem('login')
    const [projectids] = data.filter((user) => (user.email === login)).map((user) => (user.projectIds));
    dispatch({...fetchProjectIdsSuccess, payload: projectids});
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
