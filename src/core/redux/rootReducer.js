import dogReducer from '../../pages/MainPage/redux/reducer';
import { togglePopUpReducer, projectsReducer, usersReducer } from '../components/AllProjectsContainer/redux/reducer';

export default {
  dog: dogReducer,
  popup: togglePopUpReducer,
  project: projectsReducer,
  user: usersReducer,
};
