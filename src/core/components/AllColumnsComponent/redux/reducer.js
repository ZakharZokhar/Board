import {
  fetchColumnsByBoardIdSuccess, fetchColumnsByBoardIdFailure,
  togglePopUpColumnOn, togglePopUpColumnOff, addNewColumn,
  displayWarningColumnAlreadyInBoard, hideWarningColumnAlreadyInBoard,
  deleteColumn,
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

    case addNewColumn.type:
      return [
        ...state,
        action.payload,
      ]

    case deleteColumn.type:
      return state.filter((column) => (column._id !== action.payload));

    default:
      return [
        ...state,
      ];
  }
}

function togglePopUpColumnReducer(state = { isColumnPopUpOpen: false }, action) {
  switch (action.type) {
    case togglePopUpColumnOn.type:
      return {
        ...state,
        isColumnPopUpOpen: true,
      };
    case togglePopUpColumnOff.type:
      return {
        ...state,
        isColumnPopUpOpen: false,
      };
    default:
      return {
        ...state,
      };
  }
}

function warningColumnPopUpReducer(state = {
  alreadyHere: false,
}, action) {
  switch (action.type) {
    case displayWarningColumnAlreadyInBoard.type:
      return {
        ...state,
        alreadyHere: true,
      };
    case hideWarningColumnAlreadyInBoard.type:
      return {
        ...state,
        alreadyHere: false,
      }
    default:
      return {
        ...state,
      };
  }
}

export { columnsReducer, togglePopUpColumnReducer, warningColumnPopUpReducer };