import {
    addBoardIdToColumn,
    createColumn, createNewTask,
    deleteColumnById,
    getColumns, getTasks, getUsers,
    getBoardById, updateTaskColumnId,
    updateTaskDescription, updateTaskName
} from "../../../../services/api/user.service";

export const fetchColumnsByBoardIdSuccess = { type: 'FETCH_COLUMN_BY_BOARD_ID_SUCCESS' };

export const fetchColumnsByBoardIdFailure = { type: 'FETCH_COLUMN_BY_BOARD_ID_FAILURE' };

export const togglePopUpColumnOn = { type: 'TOGGLE_POPUP_COLUMN_ON' };

export const togglePopUpColumnOff = { type: 'TOGGLE_POPUP_COLUMN_OFF' };

export const togglePopUpTaskOn = { type: 'TOGGLE_POPUP_TASK_ON' };

export const togglePopUpTaskOff = { type: 'TOGGLE_POPUP_TASK_OFF' };

export const addNewColumn = { type: 'ADD_NEW_COLUMN' };

export const deleteColumn = { type: 'DELETE_COLUMN' };

export const displayWarningColumnAlreadyInBoard = { type: 'DISPLAY_WARNING_COLUMN_ALREADY_IN_BOARD' };

export const hideWarningColumnAlreadyInBoard = { type: 'HIDE_WARNING_COLUMN_ALREADY_IN_BOARD' };

export const displayWarningEmptyNameColumn = { type: 'DISPLAY_WARNING_EMPTY_NAME_COLUMN' };

export const hideWarningEmptyNameColumn = { type: 'HIDE_WARNING_EMPTY_NAME_COLUMN' };

export const displayWarningLongNameColumn = { type: 'DISPLAY_WARNING_LONG_NAME_COLUMN' };

export const hideWarningLongNameColumn = { type: 'HIDE_WARNING_LONG_NAME_COLUMN' };

export const addTaskToColumn = { type: 'ADD_TASK_TO_COLUMN' };

export const displayWarningEmptyNameTask = { type: 'DISPLAY_WARNING_EMPTY_NAME_TASK' };

export const hideWarningEmptyNameTask = { type: 'HIDE_WARNING_EMPTY_NAME_TASK' };

export const displayWarningLongNameTask = { type: 'DISPLAY_WARNING_LONG_NAME_TASK' };

export const hideWarningLongNameTask = { type: 'HIDE_WARNING_LONG_NAME_TASK' };

export const displayWarningLongDescriptionTask = { type: 'DISPLAY_WARNING_LONG_DESCRIPTION_TASK' };

export const hideWarningLongDescriptionTask = { type: 'HIDE_WARNING_LONG_DESCRIPTION_TASK' };

export const displayWarningEmailNotExistTask = { type: 'DISPLAY_WARNING_EMAIL_NOT_EXIST_TASK' };

export const hideWarningEmailNotExistTask = { type: 'HIDE_WARNING_EMAIL_NOT_EXIST_TASK' };

export const getBoardName = { type: 'GET_BOARD_NAME' };

export const updateTaskDrop = { type: 'UPDATE_TASK_DROP' };

export const updateColumnsAfterDrop = { type: 'UPDATE_COLUMNS_AFTER_DROP' };

export const toggleSetTaskOn = { type: 'TOGGLE_SET_TASK_ON' };

export const toggleSetTaskOff = { type: 'TOGGLE_SET_TASK_OFF' };

export const changeDescriptionOnSetTask = { type: 'CHANGE_DESCRIPTION_ON_SET_TASK' };

export const changeTaskDescriptionInColumns = { type: 'CHANGE_TASK_DESCRIPTION_IN_COLUMNS' };

export const changeTaskNameInColumns = { type: 'CHANGE_TASK_NAME_IN_COLUMNS' };

export const fetchColumnsByBoardId = (id) => async (dispatch) => {
    try {
        const allUsers = await getUsers();
        const { data } = await getColumns();
        const columnsInBoard = data.filter((column) => column.boardIds.includes(id));
        const allTasks = await getTasks();
        const tasksInBoard = allTasks.data.filter((task) => task.boardId === id);
        columnsInBoard.map((column) => {
          column.tasks = tasksInBoard.filter((task) => task.statusId === column._id);
          column.tasks.map((task) => {
            const [assignToUser] = allUsers.data.filter((user) => task.assignedTo === user._id)
            task.userName = assignToUser ? assignToUser.name : 'User is not assigned';
            task.userImg = assignToUser ? assignToUser.avatarLink : '';
          })
        })
        dispatch({...fetchColumnsByBoardIdSuccess, payload: columnsInBoard});
        const board = await getBoardById(id)
        dispatch({...getBoardName, payload: board.data.name})
    } catch (error) {
        dispatch({...fetchColumnsByBoardIdFailure, payload: error});
    }
}

export const addNewColumnToServer = (name, boardId) => async (dispatch) => {
    try {
        const allColumns = await getColumns();
        const allColumnsNames = allColumns.data.map((column) => column.name)
        const isColumnAlreadyExist = allColumnsNames.includes(name);
        if (isColumnAlreadyExist) {
          const [existingColumn] = allColumns.data.filter((column) => column.name === name);
          const isColumnAlreadyInBoard = existingColumn.boardIds.includes(boardId);
          if (isColumnAlreadyInBoard) {
              dispatch(displayWarningColumnAlreadyInBoard)
          } else {
            await addBoardIdToColumn(existingColumn._id, {boardIds: [...existingColumn.boardIds, boardId]});
            existingColumn.tasks = []
            dispatch({...addNewColumn, payload: existingColumn})
            dispatch(hideWarningColumnAlreadyInBoard)
          }
        } else {
          const { data } = await createColumn({name: name, boardIds: [boardId]});
          data.boardIds = [boardId];
          data.tasks = []
          dispatch({...addNewColumn, payload: data})
          dispatch(hideWarningColumnAlreadyInBoard)
        }

    } catch (error) {
        console.log(error);
    }
}

export const deleteColumnFromServer = (id) => async (dispatch) => {
    try {
        await deleteColumnById(id)
        dispatch({...deleteColumn, payload: id})
    } catch (error) {
        console.log(error)
    }
}

export const togglePopUpTaskWithUsers = (columnId) => async (dispatch) => {
    try {
        const { data } = await getUsers();
        dispatch({...togglePopUpTaskOn, payload: {users: data, columnId: columnId}});
    } catch (error) {
        console.log(error)
    }
}

export const addNewTaskToServer = (name, description, boardId, columnId, email) => async (dispatch) => {
    try {
      const allUsers = await getUsers();
      const [taskUser] = allUsers.data.filter((user) => user.email === email)
      const { data } = await createNewTask({
        name:name,
        description: description,
        boardId: boardId,
        statusId: columnId,
        assignedTo: taskUser._id,
        elapsedTime: 0,
      });
      data.userName = taskUser.name;
      data.userImg = taskUser.avatarLink;
      dispatch({...addTaskToColumn, payload: {columnId: columnId, task: data}})
    } catch (error) {
        console.log(error)
    }
}

export const updateTaskAfterDrop = (columnId, taskId) => async (dispatch) => {
    try {
      await updateTaskColumnId(taskId, columnId);
    } catch(error) {
      console.log(error)
    }

}

export const updateTaskDescriptionOnSetTask = (taskId, newDescription) => async (dispatch) => {
    try {
     await updateTaskDescription(taskId, newDescription);
    } catch (error) {
      console.log(error);
    }
}

export const updateTaskNameOnSetTask = (taskId, newName) => async (dispatch) => {
    try {
      await updateTaskName(taskId, newName);
    } catch (error) {
      console.log(error);
    }
}

export const toggleSetTaskOnWithUsers = (taskParams) => async (dispatch) => {
    try {
        const { data } = await getUsers();
        dispatch({...toggleSetTaskOn, payload: {
                taskName: taskParams.taskName,
                userAvatar: taskParams.userAvatar,
                userName: taskParams.userName,
                taskDescription: taskParams.taskDescription,
                taskId: taskParams.taskId,
                columnId: taskParams.columnId,
                users: data,
                }
          });
    } catch (error) {
        console.log(error)
    }
}
