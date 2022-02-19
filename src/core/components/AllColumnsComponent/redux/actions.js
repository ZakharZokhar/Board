import {
    addBoardIdToColumn,
    createColumn,
    deleteColumnById,
    getColumns
} from "../../../../services/api/user.service";

export const fetchColumnsByBoardIdSuccess = { type: 'FETCH_COLUMN_BY_BOARD_ID_SUCCESS' };

export const fetchColumnsByBoardIdFailure = { type: 'FETCH_COLUMN_BY_BOARD_ID_FAILURE' };

export const togglePopUpColumnOn = { type: 'TOGGLE_POPUP_COLUMN_ON' };

export const togglePopUpColumnOff = { type: 'TOGGLE_POPUP_COLUMN_OFF' };

export const addNewColumn = { type: 'ADD_NEW_COLUMN' };

export const deleteColumn = { type: 'DELETE_COLUMN' };

export const displayWarningColumnAlreadyInBoard = { type: 'DISPLAY_WARNING_COLUMN_ALREADY_IN_BOARD' }

export const hideWarningColumnAlreadyInBoard = { type: 'HIDE_WARNING_COLUMN_ALREADY_IN_BOARD' }

export const fetchColumnsByBoardtId = (id) => async (dispatch) => {
    try {
        const { data } = await getColumns();
        const columnsInBoard = data.filter((column) => column.boardIds.includes(id));
        dispatch({...fetchColumnsByBoardIdSuccess, payload: columnsInBoard});
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
            await addBoardIdToColumn(existingColumn._id, {boardId: boardId});
            dispatch({...addNewColumn, payload: existingColumn})
            dispatch(hideWarningColumnAlreadyInBoard)
          }
        } else {
          const { data } = await createColumn({name: name, boardId: boardId});
          await addBoardIdToColumn(data._id, {boardId: boardId});
          data.boardIds = [boardId];
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