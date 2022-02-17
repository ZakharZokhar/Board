import dogReducer from '../../pages/MainPage/redux/reducer';
import {
  togglePopUpReducer,
  projectsReducer,
  projectIdsReducer,
  warningPopUpReducer,
} from '../components/AllProjectsContainer/redux/reducer';
import openingBoardsReducer from "../components/BigContainerForKanban/redux/reducer";
import boardsReducer from "../components/AllBoardsComponent/redux/reducer";

export default {
  dog: dogReducer,
  popup: togglePopUpReducer,
  project: projectsReducer,
  projectIds: projectIdsReducer,
  warningsPopUp: warningPopUpReducer,
  openBoards: openingBoardsReducer,
  boards: boardsReducer,
};
