import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { CloseIcon } from '../../../shared/icons/icons';
import {
  PopUp, PopUpWindow, PopUpHeader, ClosePopUpButton, PopUpMid, InputPopUp, PopUpCreateButton,
  HrStyled, PopUpWarnings,
} from './PopUpAddProjectStyles';
import {
  togglePopUpOff, addNewProject, fetchProjectIds,
  displayWarningEmptyName, hideWarningEmptyName,
  displayWarningLongDescription, hideWarningLongDescription,
  displayWarningLongName, hideWarningLongName,
} from '../AllProjectsContainer/redux/actions';
import { delay } from '../../../shared/helpers';

function PopUpAddProject({ onCloseClick }) {
  const dispatch = useDispatch();
  const warnings = useSelector((state) => (state.warningsPopUp));
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');
  const handleChangeName = (even) => (setText(even.target.value));
  const handleChangeDesc = (even) => (setDescription(even.target.value));
  const handleCreateClick = (name, description) => {
    if (name === '') {
      dispatch(displayWarningEmptyName);
      dispatch(hideWarningLongName);
      dispatch(hideWarningLongDescription);
    } else if (description.length > 1024) {
      dispatch(displayWarningLongDescription);
      dispatch(hideWarningEmptyName);
      dispatch(hideWarningLongName);
    } else if (name.length > 128) {
      dispatch(displayWarningLongName);
      dispatch(hideWarningEmptyName);
      dispatch(hideWarningLongDescription);
    } else {
      dispatch(hideWarningEmptyName);
      dispatch(hideWarningLongDescription);
      dispatch(hideWarningLongName);
      dispatch({ ...addNewProject, payload: {name: name, description: description} });
      delay(2000).then(() => dispatch(fetchProjectIds()));
      dispatch(togglePopUpOff);
    }
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
        <PopUpWarnings>
          {warnings.emptyName && 'Name field must not be empty!!'}
          {warnings.longDescription && 'Description too long!! (maximum 1024 characters)'}
          {warnings.longName && 'Name too long!! (maximum 128 characters)'}
        </PopUpWarnings>
        <PopUpMid>
          Project title
          <InputPopUp value={text} onChange={handleChangeName} />
          Project description
          <InputPopUp value={description} onChange={handleChangeDesc} />
          <PopUpCreateButton onClick={() => {
            handleCreateClick(text, description);
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
