import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { CloseIcon } from '../../../shared/icons/icons';
import {
  PopUp, PopUpWindow, PopUpHeader, ClosePopUpButton, PopUpMid, InputPopUp, PopUpCreateButton,
  HrStyled,
} from './PopUpAddProjectStyles';
import {togglePopUpOff, addNewProject, fetchProjectIds} from '../AllProjectsContainer/redux/actions';

function PopUpAddProject({ onCloseClick }) {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');
  const handleChangeName = (even) => (setText(even.target.value));
  const handleChangeDesc = (even) => (setDescription(even.target.value));
  const handleCreateClick = (name, description) => {
    dispatch({ ...addNewProject, payload: {name: name, description: description} });
    dispatch(fetchProjectIds())
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
        <HrStyled />
        <PopUpMid>
          Project title
          <InputPopUp value={text} onChange={handleChangeName} />
          Project description
          <InputPopUp value={description} onChange={handleChangeDesc} />
          <PopUpCreateButton onClick={() => {
            handleCreateClick(text.length < 60 ? text : `${text.substring(0, 60)}...`,
              description);
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
