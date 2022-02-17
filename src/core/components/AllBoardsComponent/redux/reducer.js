import {
  fetchBoardsByProjectIdSuccess,
  fetchBoardsByProjectIdFailure,
  hideAllBoards,
} from "./actions";

function boardsReducer(state = [], action) {
  switch (action.type) {
    case fetchBoardsByProjectIdSuccess.type:
      return action.payload;

    case fetchBoardsByProjectIdFailure.type:
      console.log(action.payload)
      return [
        ...state,
      ];

    case hideAllBoards.type:
      return [];

    default:
      return [
        ...state,
      ];
  }
}

export default boardsReducer;