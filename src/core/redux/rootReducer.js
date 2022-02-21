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

export default {
  dog: dogReducer,
  popup: togglePopUpReducer,
  project: projectsReducer,
  projectIds: projectIdsReducer,
  warningsPopUp: warningPopUpReducer,
  boards: boardsReducer,
  popupBoard: togglePopUpBoardReducer,
  warningsBoardPopUp: warningBoardPopUpReducer,
  projectName: projectNameReducer,
};
