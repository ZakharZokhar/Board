import dogReducer from '../../pages/MainPage/redux/reducer';
import togglePopUpReducer from '../components/AllProjectsContainer/redux/reducer';

export default {
  dog: dogReducer,
  popup: togglePopUpReducer,
};
