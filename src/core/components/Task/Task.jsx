import PropTypes from "prop-types";
import {TaskContainer, BotTask, MidTask, TaskAvatar} from "./TaskStyles";
import { HrStyled } from "../../../shared/basic-components/Hr";

function Task({ taskName, userAvatarAssignedToTask, userNameAssignedToTask }) {
  const link='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
  return (
    <TaskContainer>
      <MidTask>
        {taskName.length < 88 ? taskName : `${taskName.substring(0, 88)}...`}
      </MidTask>
      <HrStyled />
      <BotTask>
        <TaskAvatar src={userAvatarAssignedToTask ? userAvatarAssignedToTask : link} />
        {userNameAssignedToTask.length < 20 ? userNameAssignedToTask : `${userNameAssignedToTask.substring(0, 20)}...`}
      </BotTask>
    </TaskContainer>
  )
}

Task.propTypes = {
  taskName: PropTypes.string,
};

Task.defaultProps = {
  taskName: null,
};

export default Task;