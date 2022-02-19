import {openBoards, closeBoards, openColumns, closeColumns} from "./actions";

function openingBoardsReducer(state={
  isBoardsOpen: false,
  boardProjectId:'',
  boardProjectName: '',
}, action) {
  switch (action.type) {
    case openBoards.type:
      return {
        ...state,
        isBoardsOpen: true,
        boardProjectId: action.payload.projectId,
        boardProjectName: action.payload.projectName,
      };
    case closeBoards.type:
      return {
        ...state,
        isBoardsOpen: false,
        boardProjectId: '',
        boardProjectName: '',
      };
    default:
      return {
        ...state,
      };
  }
}

function openingColumnsReducer(state={
  isColumnsOpen: false,
  columnBoardId:'',
  columnBoardName: '',
}, action) {
  switch (action.type) {
    case openColumns.type:
      return {
        ...state,
        isColumnsOpen: true,
        columnBoardId: action.payload.boardId,
        columnBoardName: action.payload.boardName,
      };
    case closeColumns.type:
      return {
        ...state,
        isColumnsOpen: false,
        columnBoardId:'',
        columnBoardName: '',
      };
    default:
      return {
        ...state,
      };
  }
}

export { openingBoardsReducer, openingColumnsReducer };