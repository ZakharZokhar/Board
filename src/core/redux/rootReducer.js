import dogReducer from '../../pages/MainPage/redux/reducer';
import {
  togglePopUpReducer,
  projectsReducer,
  projectIdsReducer,
  warningPopUpReducer,
} from '../components/AllProjectsContainer/redux/reducer';
import {
  boardsReducer, togglePopUpBoardReducer, warningBoardPopUpReducer,
  projectNameReducer,
} from "../components/AllBoardsComponent/redux/reducer";

import {
  columnsReducer, togglePopUpColumnReducer, warningColumnPopUpReducer,
  togglePopUpTaskReducer,
} from "../components/AllColumnsComponent/redux/reducer";

import dropDownReducer from "../../shared/basic-components/DropDown/redux/reducer";

export default {
  dog: dogReducer,
  popup: togglePopUpReducer,
  project: projectsReducer,
  projectIds: projectIdsReducer,
  warningsPopUp: warningPopUpReducer,
  boards: boardsReducer,
  popupBoard: togglePopUpBoardReducer,
  warningsBoardPopUp: warningBoardPopUpReducer,
  openColumns: openingColumnsReducer,
  columns: columnsReducer,
  popupColumn: togglePopUpColumnReducer,
  warningsColumnPopUp: warningColumnPopUpReducer,
  popupTask: togglePopUpTaskReducer,
  dropDown: dropDownReducer,
  projectName: projectNameReducer,
};
