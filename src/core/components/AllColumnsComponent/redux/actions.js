import { getColumns } from "../../../../services/api/user.service";

export const fetchColumnsByBoardIdSuccess = { type: 'FETCH_COLUMN_BY_BOARD_ID_SUCCESS' };

export const fetchColumnsByBoardIdFailure = { type: 'FETCH_COLUMN_BY_BOARD_ID_FAILURE' };

export const fetchColumnsByBoardtId = (id) => async (dispatch) => {
    try {
        const { data } = await getColumns();
        const columnsInBoard = data.filter((column) => column.boardIds.includes(id));
        dispatch({...fetchColumnsByBoardIdSuccess, payload: columnsInBoard});
    } catch (error) {
        dispatch({...fetchColumnsByBoardIdFailure, payload: error});
    }
}