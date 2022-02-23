import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import {
    PopUp, PopUpHeader, ClosePopUpButton, PopUpMid, InputPopUp, PopUpCreateButton,
    PopUpWarnings
} from "../PopUpAddProject/PopUpAddProjectStyles";
import { CloseIcon } from '../../../shared/icons/icons';
import { HrStyled } from '../../../shared/basic-components/Hr';
import {
    addNewBoardToServer, togglePopUpBoardOff,
    displayWarningEmptyNameBoard, hideWarningEmptyNameBoard,
    displayWarningLongNameBoard, hideWarningLongNameBoard,
} from "../AllBoardsComponent/redux/actions";
import { PopUpBoardWindow } from "./PopUpAddBoardStyles";

export const PopUpAddBoard = ({ projectId }) => {
    const dispatch = useDispatch();
    const warnings = useSelector((state) => state.warningsBoardPopUp);
    const [name, setName] = useState('');
    const onCloseClick = () => {
        dispatch(togglePopUpBoardOff);
    };
    const handleChangeName = (even) => (setName(even.target.value));
    const handleCreateClick = (name) => {
        if (name === '') {
            dispatch(displayWarningEmptyNameBoard);
            dispatch(hideWarningLongNameBoard);
        } else if (name.length > 128) {
            dispatch(displayWarningLongNameBoard);
            dispatch(hideWarningEmptyNameBoard);
        } else {
            dispatch(addNewBoardToServer(name, projectId))
            dispatch(togglePopUpBoardOff);
        }
    };

    return (
        <PopUp>
            <PopUpBoardWindow>
                <PopUpHeader>
                    Create new board
                    <ClosePopUpButton onClick={() => onCloseClick()}>
                        <CloseIcon />
                    </ClosePopUpButton>
                </PopUpHeader>
                <HrStyled />
                <PopUpWarnings>
                    {warnings.emptyName && 'Name field must not be empty!!'}
                    {warnings.longName && 'Name too long!! (maximum 128 characters)'}
                </PopUpWarnings>
                <PopUpMid>
                    Board title
                    <InputPopUp value={name} onChange={handleChangeName} />
                    <PopUpCreateButton onClick={() => {
                        handleCreateClick(name);
                    }}>
                        Create
                    </PopUpCreateButton>
                </PopUpMid>
            </PopUpBoardWindow>
        </PopUp>
    );
}
