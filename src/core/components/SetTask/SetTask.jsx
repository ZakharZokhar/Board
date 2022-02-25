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
    CloseIcon1,
    DeleteIcon,
    PencilIcon
} from '../../../shared/icons/icons';
import {
  toggleSetTaskOff, changeDescriptionOnSetTask,
  updateTaskDescriptionOnSetTask, changeTaskDescriptionInColumns,
  changeTaskNameInColumns, updateTaskNameOnSetTask,
  displayWarningNoSuchEmailInSetTask, hideWarningNoSuchEmailInSetTask,
  updateTaskAssignedOnSetTask, changeTaskAssignedInColumns,
} from "../Columns/redux/actions";
import DropDown from "../../../shared/basic-components/DropDown/DropDown";

export default function SetTask() {
    const dispatch = useDispatch();
    const taskInfo = useSelector((state) => state.popupSetTask.params);
    const users = useSelector((state) => state.popupSetTask.users);
    const emails = users.map((user) => user.email);
    const warnings = useSelector((state) => state.warningsSetTask);
    const [description, setDescription] = useState(taskInfo.taskDescription);
    const [isNameEditing, setIsNameEditing] = useState(false);
    const [isAssignedEditing, setIsAssignedEditing] = useState(false);
    const [taskName, setTaskName] = useState(taskInfo.taskName);
    const [userName, setUserName] = useState(taskInfo.userName);
    const [userAvatar, setUserAvatar] = useState(taskInfo.userAvatar)
    const email = useSelector((state) => state.dropDown.inDropDown);
    const link='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png';
    const toggleSetTask = () => {
      dispatch(toggleSetTaskOff);
      setIsNameEditing(false);
      setIsAssignedEditing(false);
      dispatch(hideWarningNoSuchEmailInSetTask);
    };
    const handleChangeDesc = (even) => (setDescription(even.target.value));
    const openEditName = () => {
      setIsNameEditing(!isNameEditing);
      if (isNameEditing) {
        dispatch({...changeTaskNameInColumns, payload: {
            columnId: taskInfo.columnId,
            taskId: taskInfo.taskId,
            newName: taskName,
            }
        })
        dispatch(updateTaskNameOnSetTask(taskInfo.taskId, taskName));
      }
    };
    const openEditAssigned = () => {
      setIsAssignedEditing(!isAssignedEditing);
      if (isAssignedEditing) {
          if (emails.includes(email)) {
              const [newAssignedUser] = users.filter((user) => user.email === email)
              setUserName(newAssignedUser.name);
              setUserAvatar(newAssignedUser.avatarLink ? newAssignedUser.avatarLink : link);
              dispatch(updateTaskAssignedOnSetTask(taskInfo.taskId, newAssignedUser._id));
              dispatch({...changeTaskAssignedInColumns, payload: {
                  taskId: taskInfo.taskId,
                  columnId: taskInfo.columnId,
                  newUserName: newAssignedUser.name,
                  newUserAvatar: newAssignedUser.avatarLink ? newAssignedUser.avatarLink : link,
                  }})
              dispatch(hideWarningNoSuchEmailInSetTask);
          } else {
              dispatch(displayWarningNoSuchEmailInSetTask);
          }

      }
    }
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
                     <InputName maxlength="128" value={taskName} onChange={handleTaskNameChange} /> :
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
                            {warnings.noSuchEmail && 'User with such email do not exist'}
                            <div>
                                {isAssignedEditing ?
                                <DropDown drops = {users.map((user) => user.email)} /> :
                                <div>
                                  <img src={userAvatar} alt=""/>
                                  <span>{userName}</span>
                                </div>
                                }
                                <EditButton onClick={openEditAssigned}>
                                  <PencilIcon/>
                                </EditButton>
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
                            <li><DeleteIcon/><span>Delete</span></li>
                        </SidebarList>

                    </Rightbar>
                </FeedRightbarWrapper>
            </SetTaskWrapper>
        </PopUp>
    );
}