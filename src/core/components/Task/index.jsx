import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Draggable } from "react-beautiful-dnd"
import {TaskContainer, BotTask, MidTask, TaskAvatar, EditButton} from "./TaskStyles";
import { HrStyled } from "../../../shared/basic-components/Hr";
import { GearIcon } from "../../../shared/icons/icons";
import { toggleSetTaskOnWithUsers } from "../Columns/redux/actions"

export const Task = ({
      taskName,
      userAvatarAssignedToTask,
      userNameAssignedToTask,
      taskId,
      taskIndex,
      taskDescription,
      columnId,
    }) => {
    const link='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
    const dispatch = useDispatch();
    const toggleSetTask = () => {
      dispatch(toggleSetTaskOnWithUsers({
          taskName: taskName,
          userAvatar: userAvatarAssignedToTask ? userAvatarAssignedToTask : link,
          userName: userNameAssignedToTask,
          taskDescription: taskDescription,
          taskId: taskId,
          columnId: columnId,
      }
      ));
    }
    return (
        <Draggable draggableId={taskId} index={taskIndex}>
            {(provided, snapshot) => (
                <TaskContainer
                    ref = {provided.innerRef}
                    snapshot= {snapshot}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <MidTask>
                        {taskName.length < 88 ? taskName : `${taskName.substring(0, 88)}...`}
                    </MidTask>
                    <HrStyled />
                    <BotTask>
                        <TaskAvatar src={userAvatarAssignedToTask ? userAvatarAssignedToTask : link} />
                        {
                            userNameAssignedToTask.length < 20 ?
                                userNameAssignedToTask :
                                `${userNameAssignedToTask.substring(0, 20)}...`
                        }
                        <EditButton onClick={toggleSetTask}>
                            <GearIcon />
                        </EditButton>
                    </BotTask>
                </TaskContainer>
            )}
        </Draggable>
    )
}

Task.propTypes = {
    taskName: PropTypes.string,
};

Task.defaultProps = {
    taskName: null,
};
