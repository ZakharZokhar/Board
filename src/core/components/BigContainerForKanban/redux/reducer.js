import { openBoards, closeBoards } from "./actions";

function openingBoardsReducer(state={isBoardsOpen: false}, action) {
  switch (action.type) {
    case openBoards.type:
      return {
        ...state,
        isBoardsOpen: true,
      };
    case closeBoards.type:
      return {
        ...state,
        isBoardsOpen: false,
      };
    default:
      return {
        ...state,
      };
  }
}

export default openingBoardsReducer;