import { getBoards } from "../../../../services/api/user.service";

export const fetchBoardsByProjectIdSuccess = { type: 'FETCH_BOARD_BY_PROJECT_ID_SUCCESS' };

export const fetchBoardsByProjectIdFailure = { type: 'FETCH_BOARD_BY_PROJECT_ID_FAILURE' };

export const hideAllBoards = { type: 'HIDE_ALL_BOARDS' };

export const fetchBoardsByProjectId = (id) => async (dispatch) => {
  try {
    const { data } = await getBoards();
    const boardsInProject = data.filter((board) => id === board.projectId);
    dispatch({...fetchBoardsByProjectIdSuccess, payload: boardsInProject});
  } catch (error) {
    dispatch({...fetchBoardsByProjectIdFailure, payload: error});
  }
}
