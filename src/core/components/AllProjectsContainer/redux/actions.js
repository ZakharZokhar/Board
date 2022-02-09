import { createAction } from 'redux-actions';
import api from '../../../../services/apiService';

export const fetchUsersRequest = createAction('FETCH_USERS_REQUEST');
export const fetchUsersPriceSuccess = createAction('FETCH_USERS_SUCCESS');
export const fetchUsersPriceFailure = createAction('FETCH_USERS_FAILURE');

export const fetchUsers = () => async (dispatch) => {
  try {
    dispatch(fetchUsersRequest());
    const { data } = await api.dog.getUsers();
    dispatch(fetchUsersPriceSuccess({ users: data }));
  } catch (error) {
    dispatch(fetchUsersPriceFailure(error));
  }
};

export const togglePopUpOn = { type: 'TOGGLE_POPUP_ON' };

export const togglePopUpOff = { type: 'TOGGLE_POPUP_OFF' };

export const addNewProject = { type: 'ADD_NEW_PROJECT' };

export const deleteProject = { type: 'DELETE_PROJECT' };

export const showProjects = { type: 'SHOW_PROJECTS' };
