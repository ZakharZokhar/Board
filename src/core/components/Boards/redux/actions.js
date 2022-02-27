import {
  createBoard,
  deleteBoardById,
  getBoards,
  updateUserBoardIds,
  getUserById, getProjectById, getTasks,
} from "../../../../services/api/user.service";

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

export const deleteBoard = { type: 'DELETE_BOARD' };

export const getProjectInfo = { type: 'GET_PROJECT_INFO' };

export const fetchBoardsByProjectId = (id) => async (dispatch) => {
  try {
    const { data } = await getBoards();
    const boardsInProject = data.filter((board) => id === board.projectId);
    const allTasks = await getTasks();
    boardsInProject.map((board) => {
      const usersHaveTasks = allTasks.data.reduce((usersHaveTaskInBoard, currentTask) => {
        if (currentTask.boardId === board._id) {
          if (!usersHaveTaskInBoard.includes(currentTask.assignedTo)) {
            return [...usersHaveTaskInBoard, currentTask.assignedTo]
          }
          return usersHaveTaskInBoard
        }
        return usersHaveTaskInBoard
      }, []);
      board.numUsers = usersHaveTasks.length
    })
    dispatch({...fetchBoardsByProjectIdSuccess, payload: boardsInProject});
    const project = await getProjectById(id)
    dispatch({...getProjectInfo, payload: {name: project.data.name, description: project.data.description}});
  } catch (error) {
    dispatch({...fetchBoardsByProjectIdFailure, payload: error});
  }
}

export const addNewBoardToServer = (name, projectId) => async (dispatch) => {
  try {
    const { data } = await createBoard({name: name, projectId: projectId});
    const { userId } = JSON.parse(localStorage.getItem('tokens'));
    const user = await getUserById(userId);
    await updateUserBoardIds(userId, [...user.data.boardIds, data._id])
    data.numUsers = 0;
    dispatch({...addNewBoard, payload: data})
  } catch (error) {
    console.log(error);
  }
}

export const deleteBoardFromServer = (id) => async (dispatch) => {
  try {
    await deleteBoardById(id)
    dispatch({...deleteBoard, payload: id})
  } catch (error) {
    console.log(error)
  }
}
