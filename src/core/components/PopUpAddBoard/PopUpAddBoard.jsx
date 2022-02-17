import PropTypes from 'prop-types';
import {
    PopUp, PopUpWindow, PopUpHeader, ClosePopUpButton, PopUpMid, InputPopUp, PopUpCreateButton,
    PopUpWarnings
} from "../PopUpAddProject/PopUpAddProjectStyles";
import { CloseIcon } from '../../../shared/icons/icons';
import { HrStyled } from '../../../shared/basic-components/Hr';

function PopUpAddBoard({ onCloseClick }) {
  return (
    <PopUp>
      <PopUpWindow>
        <PopUpHeader>
          Create new board
          <ClosePopUpButton onClick={onCloseClick}>
            <CloseIcon />
          </ClosePopUpButton>
        </PopUpHeader>
        <HrStyled />
        <PopUpWarnings>
        </PopUpWarnings>
        <PopUpMid>
          Board title
          <InputPopUp />
          <PopUpCreateButton>
            Create
          </PopUpCreateButton>
        </PopUpMid>
      </PopUpWindow>
    </PopUp>
  );
}

PopUpAddBoard.propTypes = {
    onCloseClick: PropTypes.func,
};

PopUpAddBoard.defaultProps = {
    onCloseClick: null,
};

export default PopUpAddBoard;