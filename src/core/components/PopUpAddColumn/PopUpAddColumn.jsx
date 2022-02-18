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

function PopUpAddColumn() {
  return (
    <PopUp>
      <PopUpColumnWindow>
         <PopUpHeader>
           Create new board
           <ClosePopUpButton>
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
      </PopUpColumnWindow>
    </PopUp>
  )
}

export default PopUpAddColumn;