import {Link} from "react-router-dom";
import { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import {
    BackToProjectsButton, BoardProjectName,
} from "../Boards/BoardsStyles";
import { ColumnsContainer, AllColumnsContainer } from "./ColumnsStyles";
import { AddColumnButton } from "../AddColumnButton";
import {Column} from "../Column";
import {PopUpAddColumn} from "../PopUpAddColumn";
import {
    togglePopUpColumnOn, fetchColumnsByBoardId, updateColumnsAfterDrop,
    updateTaskAfterDrop,
} from "./redux/actions";
import {PopUpAddTask} from "../PopUpAddTask";

export const Columns = ({projectId, boardId}) => {
    const dispatch = useDispatch();
    const columns = useSelector((state) => state.columns);
    const isPopUpColumnOpen = useSelector((state) => state.popupColumn.isColumnPopUpOpen);
    const isPopUpTaskOpen = useSelector((state) => state.popupTask.isTaskPopUpOpen);
    const warnings = useSelector((state) => state.warningsColumnPopUp);
    const boardName = useSelector((state) => state.boardName.name)
    const showPopUp = () => {
        dispatch(togglePopUpColumnOn);
    }
    useEffect(() => {
        dispatch(fetchColumnsByBoardId(boardId));
    }, []);


    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        const [destinationColumn] = columns.filter((column) => column._id === result.destination.droppableId);
        const [sourceColumn] = columns.filter((column) => column._id === result.source.droppableId);
        const [droppedTask] = sourceColumn.tasks.filter((task) => task._id === result.draggableId);
        const updatedColumns = columns.map((column) => {
            if (sourceColumn._id !== destinationColumn._id) {
                if ((column._id === sourceColumn._id)) {
                    column.tasks = column.tasks.filter((task) => task._id !== droppedTask._id);
                } else if (column._id === destinationColumn._id) {
                    column.tasks = [...column.tasks, droppedTask];
                }
            }
            return column;
        })

        dispatch({...updateColumnsAfterDrop, payload: updatedColumns} );
        dispatch(updateTaskAfterDrop(destinationColumn._id, droppedTask._id))

    };
    return (
        <AllColumnsContainer>
            <BoardProjectName>
                {boardName}
            </BoardProjectName>
            <Link to={`/projects/${projectId}`}>
                <BackToProjectsButton>
                    Back to boards
                </BackToProjectsButton>
            </Link>
            {warnings.alreadyHere && 'Column with that name is already here!!'}
            <DragDropContext onDragEnd={onDragEnd}>
                <ColumnsContainer>
                    {columns.map((column) => (
                        <Column
                            key = {column._id}
                            columnName = {column.name.length < 20 ? column.name : `${column.name.substring(0, 20)}...`}
                            columnId = {column._id}
                            tasksInColumn = {column.tasks}
                        />
                    ))}
                </ColumnsContainer>
            </DragDropContext>
            <AddColumnButton onAddColumnClick = {showPopUp}/>
            {isPopUpColumnOpen && <PopUpAddColumn boardId={boardId} />}
            {isPopUpTaskOpen && <PopUpAddTask boardId={boardId} />}
        </AllColumnsContainer>
    );
}
