import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
    SetTaskWrapper,
    Header,
    Feed,
    Rightbar,
    DivAssigned,
    FeedRightbarWrapper,
    ABold,
    DivTimer,
    DivDescription,
    SpanStyled,
    WhiteButton,
    BlueButton,
    DivJustifyContentRight,
    InputPopUp,
    PopUp,
    CloseButton,
    EditButton,
    InputName,
} from './SetTaskStyles'
import {SidebarList} from '../Sidebar/SidebarStyles'
import {
    UserCircleIcon,
    CloseIcon1,
    DatesIcon,
    MoveIcon,
    DeleteIcon,
    StartTimerIcon,
    PencilIcon
} from '../../../shared/icons/icons';
import {
  toggleSetTaskOff, changeDescriptionOnSetTask,
  updateTaskDescriptionOnSetTask, changeTaskDescriptionInColumns,
} from "../Columns/redux/actions";

export default function SetTask() {
    const dispatch = useDispatch();
    const taskInfo = useSelector((state) => state.popupSetTask.params);
    const [description, setDescription] = useState(taskInfo.taskDescription);
    const [isNameEditing, setIsNameEditing] = useState(false);
    const [taskName, setTaskName] = useState(taskInfo.taskName);
    const toggleSetTask = () => {
      dispatch(toggleSetTaskOff);
    };
    const handleChangeDesc = (even) => (setDescription(even.target.value));
    const openEditName = () => {
      setIsNameEditing(!isNameEditing)
      if (!isNameEditing) {

      }
    };
    const handleUndo = () => (setDescription(taskInfo.taskDescription));
    const handleTaskNameChange = (even) => (setTaskName(even.target.value))
    const handleSaveDescription = () => {
      dispatch({...changeDescriptionOnSetTask, payload: description});
      dispatch({...changeTaskDescriptionInColumns, payload: {
          columnId: taskInfo.columnId,
          taskId: taskInfo.taskId,
          newDescription: description,
          }
      })
      dispatch(updateTaskDescriptionOnSetTask(taskInfo.taskId, description));
    }
    return (
        <PopUp>
            <SetTaskWrapper>
                <Header>
                    {isNameEditing ?
                     <InputName value={taskName} onChange={handleTaskNameChange} /> :
                     <span>{taskName}</span>
                    }
                    <div>
                        <EditButton onClick={openEditName}>
                          <PencilIcon/>
                        </EditButton>
                        <CloseButton onClick={toggleSetTask}>
                          <CloseIcon1/>
                        </CloseButton>
                    </div>
                </Header>
                <FeedRightbarWrapper>
                    <Feed>
                        <DivTimer>
                            <ABold fs={16}>Timer</ABold>
                            <hr/>
                            <div><SpanStyled>Total</SpanStyled><SpanStyled>10d 5h 50m 20s</SpanStyled></div>
                            <hr/>
                            <div><SpanStyled>Today</SpanStyled><SpanStyled fw={600}>3h 25m 34s</SpanStyled></div>
                            <hr/>
                            <DivJustifyContentRight>
                                <WhiteButton>Details</WhiteButton>
                                <BlueButton Width={'100'}>Start timer</BlueButton>
                            </DivJustifyContentRight>
                        </DivTimer>
                        <DivAssigned><ABold fs={16}>Assigned to</ABold>
                            <div>
                                <div><img src={taskInfo.userAvatar} alt=""/>
                                    <span>{taskInfo.userName}</span></div>
                                <PencilIcon/>
                            </div>
                        </DivAssigned>
                        <DivDescription>
                            <ABold fs={16}>Description</ABold>
                            <InputPopUp rows="8" maxlength="1024"
                                       value={description} onChange={handleChangeDesc}/>
                            <DivJustifyContentRight>
                                <WhiteButton onClick={handleUndo}>Undo</WhiteButton>
                                <BlueButton onClick={handleSaveDescription}>Save</BlueButton>
                            </DivJustifyContentRight>
                        </DivDescription>
                    </Feed>
                    <Rightbar>
                        <SidebarList>
                            <div><ABold mb={0} ml={15}>Add to card</ABold></div>
                            <li><UserCircleIcon/><span>Assigned to</span></li>
                            <li><DatesIcon/><span>Dates</span></li>
                            <div><ABold mb={0} ml={15}>Actions</ABold></div>
                            <li><MoveIcon/><span>Move</span></li>
                            <li><DeleteIcon/><span>Delete</span></li>
                            <li><StartTimerIcon/><span>Start timer</span></li>
                        </SidebarList>

                    </Rightbar>
                </FeedRightbarWrapper>
            </SetTaskWrapper>
        </PopUp>
    );
}