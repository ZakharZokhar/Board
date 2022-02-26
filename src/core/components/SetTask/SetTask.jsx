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
    ButtonStyle,
    InputName,
    LabelWrap,
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
  deleteTaskFromColumns, deleteTaskFromServer,
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
    const [isDescEditing, setIsDescEditing] = useState(false);
    const [taskName, setTaskName] = useState(taskInfo.taskName);
    const [userName, setUserName] = useState(taskInfo.userName);
    const [userAvatar, setUserAvatar] = useState(taskInfo.userAvatar)
    const email = useSelector((state) => state.dropDown.inDropDown);
    const link='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png';
    const toggleSetTask = () => {
      dispatch(toggleSetTaskOff);
      setIsNameEditing(false);
      setIsAssignedEditing(false);
      setIsDescEditing(false);
      dispatch(hideWarningNoSuchEmailInSetTask);
    };
    const handleChangeDesc = (even) => (setDescription(even.target.value));
    const handleEditDescription = () => (setIsDescEditing(true))
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
      setIsDescEditing(false)
      dispatch(updateTaskDescriptionOnSetTask(taskInfo.taskId, description));
    }
    const handleDelete = () => {
        dispatch(toggleSetTaskOff);
        setIsNameEditing(false);
        setIsAssignedEditing(false);
        dispatch(hideWarningNoSuchEmailInSetTask);
        dispatch({
            ...deleteTaskFromColumns, payload: {
                columnId: taskInfo.columnId,
                taskId: taskInfo.taskId,
            }
        });
        dispatch(deleteTaskFromServer(taskInfo.taskId));
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
                        <ButtonStyle onClick={openEditName}>
                          <PencilIcon/>
                        </ButtonStyle>
                        <ButtonStyle onClick={toggleSetTask}>
                          <CloseIcon1/>
                        </ButtonStyle>
                    </div>
                </Header>
                <FeedRightbarWrapper>
                    <Feed>
                        <DivTimer>
                            <ABold fs={16}>Duration</ABold>
                            <LabelWrap><SpanStyled>10d 5h 50m 20s</SpanStyled></LabelWrap>
                            <DivJustifyContentRight>
                                <BlueButton>Edit</BlueButton>
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
                                <ButtonStyle onClick={openEditAssigned}>
                                  <PencilIcon/>
                                </ButtonStyle>
                            </div>
                        </DivAssigned>
                            {isDescEditing ? (
                              <DivDescription>
                                <ABold fs={16}>Description</ABold>
                                 <InputPopUp rows="8" maxlength="1024"
                                       value={description} onChange={handleChangeDesc}/>
                                 <DivJustifyContentRight>
                                   <WhiteButton onClick={handleUndo}>Undo</WhiteButton>
                                   <BlueButton onClick={handleSaveDescription}>Save</BlueButton>
                                 </DivJustifyContentRight>
                              </DivDescription>
                                ) : (
                                <DivDescription>
                                  <ABold fs={16}>Description</ABold>
                                  <LabelWrap>
                                    {description}
                                  </LabelWrap>
                                  <DivJustifyContentRight>
                                    <BlueButton onClick={handleEditDescription}>Edit</BlueButton>
                                  </DivJustifyContentRight>
                                </DivDescription>

                              )
                            }
                    </Feed>
                    <Rightbar>
                        <SidebarList>
                            <li><DeleteIcon/><span onClick={handleDelete}>Delete</span></li>
                        </SidebarList>

                    </Rightbar>
                </FeedRightbarWrapper>
            </SetTaskWrapper>
        </PopUp>
    );
}