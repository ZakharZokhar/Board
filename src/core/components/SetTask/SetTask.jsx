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
    InputForTime,
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
  updateTaskTimeOnSetTask, changeTaskTimeInColumns,
} from "../Columns/redux/actions";
import DropDown from "../../../shared/basic-components/DropDown/DropDown";

export default function SetTask() {
    const dispatch = useDispatch();
    const taskInfo = useSelector((state) => state.popupSetTask.params);
    const users = useSelector((state) => state.popupSetTask.users);
    const emails = users.map((user) => user.email);
    const warnings = useSelector((state) => state.warningsSetTask);
    const getNormalTimeFromSeconds = (seconds) => {
        const d = Math.floor(seconds / (3600*24));
        const h = Math.floor(seconds % (3600*24) / 3600);
        const m = Math.floor(seconds % 3600 / 60);
        const s = Math.floor(seconds % 60);
        return {days: d, hours: h, minutes: m, seconds: s};
    }

    const [description, setDescription] = useState(taskInfo.taskDescription);
    const [isNameEditing, setIsNameEditing] = useState(false);
    const [isAssignedEditing, setIsAssignedEditing] = useState(false);
    const [isDescEditing, setIsDescEditing] = useState(false);
    const [isDurEditing, setIsDurEditing] = useState(false);
    const [taskName, setTaskName] = useState(taskInfo.taskName);
    const [userName, setUserName] = useState(taskInfo.userName);
    const [userAvatar, setUserAvatar] = useState(taskInfo.userAvatar);
    const [taskDuration, setTaskDuration] = useState(getNormalTimeFromSeconds(taskInfo.taskDuration));
    const email = useSelector((state) => state.dropDown.inDropDown);
    const link='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png';
    const toggleSetTask = () => {
      dispatch(toggleSetTaskOff);
      setIsNameEditing(false);
      setIsAssignedEditing(false);
      setIsDescEditing(false);
      setIsDurEditing(false);
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
    const openEditDuration = () => {
      setIsDurEditing(true);
    }
    const saveEditDuration = () => {
     const seconds = Math.round(Math.abs(taskDuration.days) *24*3600 +
        Math.abs(taskDuration.hours)*3600 +
        Math.abs(taskDuration.minutes)*60 +
        Math.abs(taskDuration.seconds));
     setIsDurEditing(false);
     setTaskDuration(getNormalTimeFromSeconds(seconds));
     dispatch({...changeTaskTimeInColumns, payload: {
             columnId: taskInfo.columnId,
             taskId: taskInfo.taskId,
             newTime: seconds,
         }});
     dispatch(updateTaskTimeOnSetTask(taskInfo.taskId, seconds));
    }
    const handleChangeDays = (even) => {
      setTaskDuration({...taskDuration, days:even.target.value})
    };
    const handleChangeHours = (even) => {
        setTaskDuration({...taskDuration, hours:even.target.value})
    };
    const handleChangeMinutes = (even) => {
        setTaskDuration({...taskDuration, minutes:even.target.value})
    };
    const handleChangeSeconds = (even) => {
        setTaskDuration({...taskDuration, seconds:even.target.value})
    };

    return (
        <PopUp>
            <SetTaskWrapper>
                <Header>
                    {isNameEditing ?
                     <InputName maxlength="128" value={taskName} onChange={handleTaskNameChange} /> :
                     <LabelWrap><span>{taskName}</span></LabelWrap>
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
                            {isDurEditing ? (
                              <DivTimer>
                                <ABold fs={16}>Duration</ABold>
                                <LabelWrap>
                                  <InputForTime
                                      type = {"number"} value={taskDuration.days} onChange={handleChangeDays}
                                  /> {'days'}
                                  <InputForTime
                                      type = {"number"} value={taskDuration.hours} onChange={handleChangeHours}
                                  /> {'hours'}
                                  <InputForTime
                                      type = {"number"} value={taskDuration.minutes} onChange={handleChangeMinutes}
                                  /> {'minutes'}
                                  <InputForTime
                                      type = {"number"} value = {taskDuration.seconds} onChange={handleChangeSeconds}
                                  /> {'seconds'}
                                </LabelWrap>
                                <DivJustifyContentRight>
                                  <BlueButton onClick={saveEditDuration}>Save</BlueButton>
                                </DivJustifyContentRight>
                              </DivTimer> ) : (
                                <DivTimer>
                                <ABold fs={16}>Duration</ABold>
                                <LabelWrap><SpanStyled> {
                                `${taskDuration.days} days 
                                ${taskDuration.hours} hours 
                                ${taskDuration.minutes} minutes 
                                ${taskDuration.seconds} seconds `
                            } </SpanStyled></LabelWrap>
                                <DivJustifyContentRight>
                                <BlueButton onClick={openEditDuration}>Edit</BlueButton>
                                </DivJustifyContentRight>
                                </DivTimer>
                              )
                            }
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