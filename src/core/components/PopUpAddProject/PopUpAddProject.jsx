import { AiOutlineClose } from 'react-icons/ai';
import {
  PopUp, PopUpWindow, PopUpHeader, ClosePopUpButton, PopUpMid, InputPopUp, PopUpCreateButton,
} from './PopUpAddProjectStyles';

function PopUpAddProject() {
  return (
    <PopUp>
      <PopUpWindow>
        <PopUpHeader>
          Create new project
          <ClosePopUpButton>
            <AiOutlineClose />
          </ClosePopUpButton>
        </PopUpHeader>
        <hr />
        <PopUpMid>
          Board title
          <InputPopUp />
          <PopUpCreateButton>Create</PopUpCreateButton>
        </PopUpMid>
      </PopUpWindow>
    </PopUp>
  );
}

export default PopUpAddProject;
