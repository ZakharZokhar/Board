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
}, action) {
  switch (action.type) {
    case openColumns.type:
      return {
        ...state,
        isColumnsOpen: true,
      };
    case closeColumns.type:
      return {
        ...state,
        isColumnsOpen: false,
      };
    default:
      return {
        ...state,
      };
  }
}

export { openingBoardsReducer, openingColumnsReducer };