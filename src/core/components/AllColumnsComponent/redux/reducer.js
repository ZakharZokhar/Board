import {
  fetchColumnsByBoardIdSuccess, fetchColumnsByBoardIdFailure,
  togglePopUpColumnOn, togglePopUpColumnOff, addNewColumn,
  displayWarningColumnAlreadyInBoard, hideWarningColumnAlreadyInBoard,
  deleteColumn, displayWarningEmptyNameColumn, hideWarningEmptyNameColumn,
  displayWarningLongNameColumn, hideWarningLongNameColumn,
  togglePopUpTaskOn, togglePopUpTaskOff, addTaskToColumn,
  displayWarningEmptyNameTask, hideWarningEmptyNameTask,
  displayWarningLongNameTask, hideWarningLongNameTask,
  displayWarningLongDescriptionTask, hideWarningLongDescriptionTask,
  displayWarningEmailNotExistTask, hideWarningEmailNotExistTask,
  getBoardName,
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

    case addTaskToColumn.type:
      console.log(action.payload);
      return state.map((column) => (
          {...column, tasks: (column._id === action.payload.columnId ?
            [...column.tasks, action.payload.task] :
            [...column.tasks])}
      ))

    case deleteColumn.type:
      return state.filter((column) => (column._id !== action.payload));

    default:
      return [
        ...state,
      ];
  }
}

function togglePopUpTaskReducer(state = { isTaskPopUpOpen: false }, action) {
  switch (action.type) {
    case togglePopUpTaskOn.type:
      return {
        ...state,
        isTaskPopUpOpen: true,
        users: action.payload.users,
        columnId: action.payload.columnId,
      };
    case togglePopUpTaskOff.type:
      return {
        ...state,
        isTaskPopUpOpen: false,
      };
    default:
      return {
        ...state,
      };
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
  emptyName: false,
  longName: false,
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
      case displayWarningEmptyNameColumn.type:
        return {
          ...state,
          emptyName: true,
        };
      case hideWarningEmptyNameColumn.type:
        return {
          ...state,
          emptyName: false,
        };
      case displayWarningLongNameColumn.type:
        return {
          ...state,
          longName: true,
        };
      case hideWarningLongNameColumn.type:
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

function boardNameReducer(state = { name:'' }, action) {
  switch (action.type) {
    case getBoardName.type:
      return {
        ...state,
        name: action.payload,
      }
    default:
      return {
        ...state,
      }
  }
}

function warningTaskPopUpReducer(state = {
  emptyName: false,
  longName: false,
  longDescription: false,
  emailDoesNotExist: false,
}, action) {
  switch (action.type) {
    case displayWarningEmptyNameTask.type:
      return {
        ...state,
        emptyName: true,
        longName: false,
        longDescription: false,
        emailDoesNotExist: false,
      };
    case hideWarningEmptyNameTask.type:
      return {
        ...state,
        emptyName: false,
      };
    case displayWarningLongNameTask.type:
      return {
        ...state,
        longName: true,
        emptyName: false,
        longDescription: false,
        emailDoesNotExist: false,
      };
    case hideWarningLongNameTask.type:
      return {
        ...state,
        longName: false,
      };
    case displayWarningLongDescriptionTask.type:
      return {
        ...state,
        longDescription: true,
        emptyName: false,
        longName: false,
        emailDoesNotExist: false,
      };
    case hideWarningLongDescriptionTask.type:
      return {
        ...state,
        longDescription: false,
      };
    case displayWarningEmailNotExistTask.type:
      return {
        ...state,
        emailDoesNotExist: true,
        longDescription: false,
        emptyName: false,
        longName: false,
      };
    case hideWarningEmailNotExistTask.type:
      return {
        ...state,
        emailDoesNotExist: false,
      };
    default:
      return {
        ...state,
      };
  }
}

export {
  columnsReducer, togglePopUpColumnReducer, warningColumnPopUpReducer, togglePopUpTaskReducer,
  warningTaskPopUpReducer, boardNameReducer,
};
