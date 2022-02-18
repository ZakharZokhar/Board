import {
  fetchBoardsByProjectIdSuccess,
  fetchBoardsByProjectIdFailure,
  hideAllBoards,
  togglePopUpBoardOn,
  togglePopUpBoardOff,
  addNewBoard,
  displayWarningEmptyNameBoard,
  hideWarningEmptyNameBoard,
  displayWarningLongNameBoard,
  hideWarningLongNameBoard,
  deleteBoard,
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

    case addNewBoard.type:
      return [
        ...state,
        action.payload,
      ]

    case deleteBoard.type:
      return state.filter((board) => (board._id !== action.payload));

    default:
      return [
        ...state,
      ];
  }
}

function togglePopUpBoardReducer(state = { isBoardPopUpOpen: false }, action) {
  switch (action.type) {
    case togglePopUpBoardOn.type:
      return {
        ...state,
        isBoardPopUpOpen: true,
      };
    case togglePopUpBoardOff.type:
      return {
        ...state,
        isBoardPopUpOpen: false,
      };
    default:
      return {
        ...state,
      };
  }
}

function warningBoardPopUpReducer(state = {
  emptyName: false,
  longName: false,
}, action) {
  switch (action.type) {
    case displayWarningEmptyNameBoard.type:
      return {
        ...state,
        emptyName: true,
      };
    case hideWarningEmptyNameBoard.type:
      return {
        ...state,
        emptyName: false,
      };
    case displayWarningLongNameBoard.type:
      return {
        ...state,
        longName: true,
      };
    case hideWarningLongNameBoard.type:
      return {
        ...state,
        longName: false,
      };
    default:
      return {
        ...state,
      };
  }
}

export {
  boardsReducer, togglePopUpBoardReducer, warningBoardPopUpReducer,
};