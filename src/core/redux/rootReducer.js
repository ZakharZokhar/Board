import dogReducer from '../../pages/MainPage/redux/reducer';
import {
  togglePopUpReducer,
  projectsReducer,
  projectIdsReducer,
  warningPopUpReducer,
} from '../components/AllProjectsContainer/redux/reducer';
import {
  openingBoardsReducer, openingColumnsReducer,
} from "../components/BigContainerForKanban/redux/reducer";
import {
  boardsReducer, togglePopUpBoardReducer, warningBoardPopUpReducer
} from "../components/AllBoardsComponent/redux/reducer";

import {
  columnsReducer, togglePopUpColumnReducer, warningColumnPopUpReducer
} from "../components/AllColumnsComponent/redux/reducer";

export default {
  dog: dogReducer,
  popup: togglePopUpReducer,
  project: projectsReducer,
  projectIds: projectIdsReducer,
  warningsPopUp: warningPopUpReducer,
  openBoards: openingBoardsReducer,
  boards: boardsReducer,
  popupBoard: togglePopUpBoardReducer,
  warningsBoardPopUp: warningBoardPopUpReducer,
  openColumns: openingColumnsReducer,
  columns: columnsReducer,
  popupColumn: togglePopUpColumnReducer,
  warningsColumnPopUp: warningColumnPopUpReducer,
};
