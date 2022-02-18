import {
  fetchColumnsByBoardIdSuccess, fetchColumnsByBoardIdFailure
} from "./actions";

function columnsReducer(state = [], action) {
  switch (action.type) {
    case fetchColumnsByBoardIdSuccess.type:
      return action.payload;

    case fetchColumnsByBoardIdFailure.type:
      console.log(action.payload)
      return [
        ...state,
      ];

    default:
      return [
        ...state,
      ];
  }
}

export default columnsReducer;