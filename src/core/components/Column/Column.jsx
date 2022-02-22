import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
    ColumnStyle, ColumnName, CloseButton, ColumnHeader, ColumnFooter, AddTaskButton,
} from "./ColumnStyles";
import { CloseIcon, PlusIcon } from "../../../shared/icons/icons";
import {deleteColumnFromServer, togglePopUpTaskWithUsers} from "../AllColumnsComponent/redux/actions";
import Task from "../Task";

function Column( {columnId, columnName, tasksInColumn}) {
  const dispatch = useDispatch();
  const onClickDelete = (columnId) => {
    dispatch(deleteColumnFromServer(columnId));
  }
  const onAddTask = (columnId) => {
    dispatch(togglePopUpTaskWithUsers(columnId));
  }

  return (
    <ColumnStyle>
      <ColumnHeader>
        <ColumnName>
          {columnName}
        </ColumnName>
        <CloseButton onClick={() => onClickDelete(columnId)}>
          <CloseIcon />
        </CloseButton>
      </ColumnHeader>
      {tasksInColumn.map((task) => (
        <Task
          key = {task._id}
          taskName = {task.name}
          userNameAssignedToTask = {task.userName}
          userAvatarAssignedToTask = {task.userImg}
        />
      ))}
      <ColumnFooter>
        <AddTaskButton onClick={() => onAddTask(columnId)}>
            <PlusIcon />
            Add a card
        </AddTaskButton>
      </ColumnFooter>
    </ColumnStyle>
  )
}

Column.propTypes = {
    ColumnName: PropTypes.string,
    ColumnId: PropTypes.string,
    tasksInColumn: PropTypes.array,
};

Column.defaultProps = {
    ColumnName: null,
    ColumnId: null,
    tasksInColumn: null,
};


export default Column;
