import { useDispatch, useSelector } from "react-redux";
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
import DropDown from "../../../shared/basic-components/DropDown";
import {addNewTaskToServer, togglePopUpTaskOff} from "../AllColumnsComponent/redux/actions";
import {useState} from "react";


function PopUpAddTask() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('')
  const users = useSelector((state) => state.popupTask.users);
  const columnId = useSelector((state) => state.popupTask.columnId)
  const boardId = useSelector((state) => state.openColumns.columnBoardId);
  const handleChangeName = (even) => (setName(even.target.value));
  const handleChangeDescription = (even) => (setDescription(even.target.value));
  const closePopUp = () => {
    dispatch(togglePopUpTaskOff);
  }
  const onCreateClick = (name, description, boardId, columnId, email) => {
    dispatch(addNewTaskToServer(name, description, boardId, columnId, email))
    dispatch(togglePopUpTaskOff);
  }
  const handleChangeEmail = (email) => (setEmail(email));

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
          </PopUpWarnings>
          <PopUpMid>
            Task title
            <InputPopUp value={name} onChange={handleChangeName}/>
            Task description
            <InputPopUp value={description} onChange={handleChangeDescription}/>
            Assign To
            <DropDown
              drops = {users.map((user) => user.email)}
              extraActions={handleChangeEmail}
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
