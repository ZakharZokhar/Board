import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {
    ClosePopUpButton,
    InputPopUp,
    PopUp, PopUpCreateButton,
    PopUpHeader,
    PopUpMid,
    PopUpWarnings
} from "../PopUpAddProject/PopUpAddProjectStyles";
import {CloseIcon} from "../../../shared/icons/icons";
import {HrStyled} from "../../../shared/basic-components/Hr";
import {PopUpColumnWindow} from "./PopUpAddColumnStyles";
import {
    addNewColumnToServer,
    togglePopUpColumnOff
} from "../AllColumnsComponent/redux/actions";

function PopUpAddColumn() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const handleChangeName = (even) => (setName(even.target.value));
  const boardId = useSelector((state) => state.openColumns.columnBoardId);
  const onCloseClick = () => {
    dispatch(togglePopUpColumnOff);
  };
  const onCreateClick = (name) => {
    dispatch(addNewColumnToServer(name, boardId))
    dispatch(togglePopUpColumnOff);
  }

  return (
    <PopUp>
      <PopUpColumnWindow>
         <PopUpHeader>
           Create new column
           <ClosePopUpButton onClick={onCloseClick}>
             <CloseIcon />
           </ClosePopUpButton>
         </PopUpHeader>
         <HrStyled />
         <PopUpWarnings>
         </PopUpWarnings>
         <PopUpMid>
           Column title
           <InputPopUp value={name} onChange={handleChangeName} />
           <PopUpCreateButton onClick={() => {onCreateClick(name)}}>
             Create
           </PopUpCreateButton>
         </PopUpMid>
      </PopUpColumnWindow>
    </PopUp>
  )
}

export default PopUpAddColumn;
