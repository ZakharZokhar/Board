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
    togglePopUpColumnOff, displayWarningLongNameColumn,
    displayWarningEmptyNameColumn, hideWarningLongNameColumn,
    hideWarningEmptyNameColumn,
} from "../AllColumnsComponent/redux/actions";

function PopUpAddColumn() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const boardId = useSelector((state) => state.openColumns.columnBoardId);
  const warnings = useSelector((state) => state.warningsColumnPopUp);
  const handleChangeName = (even) => (setName(even.target.value));
  const onCloseClick = () => {
    dispatch(togglePopUpColumnOff);
  };
  const onCreateClick = (name) => {
      if (name === '') {
          dispatch(displayWarningEmptyNameColumn);
          dispatch(hideWarningLongNameColumn);
      } else if (name.length > 128) {
          dispatch(displayWarningLongNameColumn);
          dispatch(hideWarningEmptyNameColumn);
      } else {
          dispatch(addNewColumnToServer(name, boardId))
          dispatch(togglePopUpColumnOff);
      }
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
           {warnings.emptyName && 'Name field must not be empty!!'}
           {warnings.longName && 'Name too long!! (maximum 128 characters)'}
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
