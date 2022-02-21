import { useDispatch, useSelector } from "react-redux";
import {useState} from "react";
import {
    ClosePopUpButton,
    InputPopUp,
    PopUp, PopUpCreateButton,
    PopUpHeader,
    PopUpMid,
    PopUpWarnings
} from "../PopUpAddProject/PopUpAddProjectStyles";
import PopUpTaskWindow from "./PopUpAddTaskStyles";
import {CloseIcon} from "../../../shared/icons/icons";
import {HrStyled} from "../../../shared/basic-components/Hr";
import DropDown from "../../../shared/basic-components/DropDown/DropDown";
import {
  addNewTaskToServer, togglePopUpTaskOff,
  displayWarningEmptyNameTask, hideWarningEmptyNameTask,
  displayWarningLongNameTask, hideWarningLongNameTask,
  displayWarningLongDescriptionTask, hideWarningLongDescriptionTask,
  displayWarningEmailNotExistTask, hideWarningEmailNotExistTask
} from "../AllColumnsComponent/redux/actions";

function PopUpAddTask({boardId}) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const users = useSelector((state) => state.popupTask.users);
  const columnId = useSelector((state) => state.popupTask.columnId)
  const email = useSelector((state) => state.dropDown.inDropDown);
  const warnings = useSelector((state) => state.warningsTaskPopUp)
  const handleChangeName = (even) => (setName(even.target.value));
  const emails = users.map((user) => user.email)
  const handleChangeDescription = (even) => (setDescription(even.target.value));
  const closePopUp = () => {
    dispatch(togglePopUpTaskOff);
  }
  const onCreateClick = (name, description, boardId, columnId, email) => {
    console.log(email);
    if (name === '') {
      dispatch(displayWarningEmptyNameTask);
    } else if (name.length > 128) {
      dispatch(displayWarningLongNameTask);
    } else if (description.length > 1024) {
      dispatch(displayWarningLongDescriptionTask);
    } else if (!emails.includes(email)) {
      dispatch(displayWarningEmailNotExistTask);
    } else  {
      dispatch(addNewTaskToServer(name, description, boardId, columnId, email))
      dispatch(togglePopUpTaskOff);
      dispatch(hideWarningEmptyNameTask);
      dispatch(hideWarningLongNameTask);
      dispatch(hideWarningLongDescriptionTask);
      dispatch(hideWarningEmailNotExistTask);
    }
  }
  return (
    <PopUp>
      <PopUpTaskWindow>
        <PopUpHeader>
          Create new task
          <ClosePopUpButton onClick={closePopUp}>
            <CloseIcon />
          </ClosePopUpButton>
        </PopUpHeader>
          <HrStyled />
          <PopUpWarnings>
            {warnings.emptyName && 'Name field must not be empty!!'}
            {warnings.longName && 'Name too long!! (maximum 128 characters)'}
            {warnings.longDescription && 'Description too long!! (maximum 1024 characters)'}
            {warnings.emailDoesNotExist && 'User with such email does not exists!!'}
          </PopUpWarnings>
          <PopUpMid>
            Task title
            <InputPopUp value={name} onChange={handleChangeName}/>
            Task description
            <InputPopUp value={description} onChange={handleChangeDescription}/>
            Assign To
            <DropDown
              drops = {users.map((user) => user.email)}
            />
            <PopUpCreateButton onClick={() => onCreateClick(name, description, boardId, columnId, email)}>
              Create
            </PopUpCreateButton>
          </PopUpMid>
      </PopUpTaskWindow>
    </PopUp>
    )
}

export default PopUpAddTask;
