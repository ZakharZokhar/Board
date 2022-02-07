import { togglePopUpOn, togglePopUpOff } from './actions';

function togglePopUpReducer(state = { isPopUpOpen: false }, action) {
  switch (action.type) {
    case togglePopUpOn.type:
      return {
        ...state,
        isPopUpOpen: true,
      };
    case togglePopUpOff.type:
      return {
        ...state,
        isPopUpOpen: false,
      };
    default:
      return {
        ...state,
      };
  }
}

export default togglePopUpReducer;
