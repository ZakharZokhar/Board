import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { CloseIcon } from '../../../shared/icons/icons';
import {
  PopUp, PopUpWindow, PopUpHeader, ClosePopUpButton, PopUpMid, InputPopUp, PopUpCreateButton,
} from './PopUpAddProjectStyles';
import { togglePopUpOff, addNewProject } from '../AllProjectsContainer/redux/actions';

function PopUpAddProject({ onCloseClick }) {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const handleChange = (even) => (setText(even.target.value));
  const handleCreateClick = (name) => {
    dispatch({ ...addNewProject, payload: name });
    dispatch(togglePopUpOff);
  };

  return (
    <PopUp>
      <PopUpWindow>
        <PopUpHeader>
          Create new project
          <ClosePopUpButton onClick={onCloseClick}>
            <CloseIcon />
          </ClosePopUpButton>
        </PopUpHeader>
        <hr />
        <PopUpMid>
          Board title
          <InputPopUp value={text} onChange={handleChange} />
          <PopUpCreateButton onClick={() => {
            handleCreateClick(text.length < 60 ? text : `${text.substring(0, 60)}...`);
          }}
          >
            Create
          </PopUpCreateButton>
        </PopUpMid>
      </PopUpWindow>
    </PopUp>
  );
}

PopUpAddProject.propTypes = {
  onCloseClick: PropTypes.func,
};

PopUpAddProject.defaultProps = {
  onCloseClick: null,
};

export default PopUpAddProject;
