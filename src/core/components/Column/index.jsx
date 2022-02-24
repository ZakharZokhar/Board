import { useDispatch } from "react-redux";
import { Droppable } from "react-beautiful-dnd";
import PropTypes from "prop-types";
import {
    ColumnStyle, ColumnName, CloseButton, ColumnHeader, ColumnFooter, AddTaskButton,
    ColumnMid,
} from "./ColumnStyles";
import { CloseIcon, PlusIcon } from "../../../shared/icons/icons";
import {deleteColumnFromServer, togglePopUpTaskWithUsers} from "../Columns/redux/actions";
import {Task} from "../Task";

export const Column = ( {columnId, columnName, tasksInColumn}) => {
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
            <Droppable droppableId = {columnId}>
                {(provided) => (
                    <ColumnMid {...provided.droppableProps} ref={provided.innerRef}>
                        {tasksInColumn.map((task, index) => (
                            <Task
                                key = {task._id}
                                taskName = {task.name}
                                userNameAssignedToTask = {task.userName}
                                userAvatarAssignedToTask = {task.userImg}
                                taskId = {task._id}
                                taskIndex = {index}
                                taskDescription = {task.description}
                                columnId = {columnId}
                            />
                        ))}
                        {provided.placeholder}
                    </ColumnMid>
                )}

            </Droppable>
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
