import dogReducer from '../../pages/MainPage/redux/reducer';
import { togglePopUpReducer, projectsReducer } from '../components/AllProjectsContainer/redux/reducer';

export default {
  dog: dogReducer,
  popup: togglePopUpReducer,
  project: projectsReducer,
};
