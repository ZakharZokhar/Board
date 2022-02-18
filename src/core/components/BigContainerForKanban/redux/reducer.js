import { openBoards, closeBoards } from "./actions";

function openingBoardsReducer(state={isBoardsOpen: false, boardProjectId:''}, action) {
  switch (action.type) {
    case openBoards.type:
      return {
        ...state,
        isBoardsOpen: true,
        boardProjectId: action.payload,
      };
    case closeBoards.type:
      return {
        ...state,
        isBoardsOpen: false,
        boardProjectId: '',
      };
    default:
      return {
        ...state,
      };
  }
}

export default openingBoardsReducer;