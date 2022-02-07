import { useSelector, useDispatch } from 'react-redux';
import AddProjectButton from '../AddProjectButton';
import PopUpAddProject from '../PopUpAddProject';
import { togglePopUpOn } from './redux/actions';

function AllProjectsHolder() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => (state.popup.isPopUpOpen));
  const togglePopUp = () => {
    dispatch(togglePopUpOn);
  };
  return (
    <div>
      <AddProjectButton onAddClick={togglePopUp} />
      {isOpen && <PopUpAddProject />}
    </div>
  );
}

export default AllProjectsHolder;
