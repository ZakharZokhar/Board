import {createBoard, getBoards} from "../../../../services/api/user.service";

export const togglePopUpBoardOn = { type: 'TOGGLE_POPUP_BOARD_ON' };

export const togglePopUpBoardOff = { type: 'TOGGLE_POPUP_BOARD_OFF' };

export const fetchBoardsByProjectIdSuccess = { type: 'FETCH_BOARD_BY_PROJECT_ID_SUCCESS' };

export const fetchBoardsByProjectIdFailure = { type: 'FETCH_BOARD_BY_PROJECT_ID_FAILURE' };

export const hideAllBoards = { type: 'HIDE_ALL_BOARDS' };

export const addNewBoard = { type: 'ADD_NEW_BOARD' };

export const displayWarningEmptyNameBoard = { type: 'DISPLAY_WARNING_EMPTY_NAME_FIELD_BOARD' };

export const hideWarningEmptyNameBoard = { type: 'HIDE_WARNING_EMPTY_NAME_FIELD_BOARD' };

export const displayWarningLongNameBoard = { type: 'DISPLAY_WARNING_LONG_NAME_BOARD' };

export const hideWarningLongNameBoard = { type: 'HIDE_WARNING_LONG_NAME_BOARD' };

export const fetchBoardsByProjectId = (id) => async (dispatch) => {
  try {
    const { data } = await getBoards();
    const boardsInProject = data.filter((board) => id === board.projectId);
    dispatch({...fetchBoardsByProjectIdSuccess, payload: boardsInProject});
  } catch (error) {
    dispatch({...fetchBoardsByProjectIdFailure, payload: error});
  }
}

export const addNewBoardToServer = (name, projectId) => async (dispatch) => {
  try {
    const { data } = await createBoard({name: name, projectId: projectId});
    console.log(data);
    dispatch({...addNewBoard, payload: data})
  } catch (error) {
    console.log(error);
  }
}
