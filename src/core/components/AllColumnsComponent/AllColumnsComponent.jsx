import {Link} from "react-router-dom";
import { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    BackToProjectsButton, BoardProjectName,
} from "../AllBoardsComponent/AllBoardsStyles";
import { ColumnsContainer, AllColumnsContainer } from "./AllColumnsComponentStyles";
import AddColumnButton from "../AddColumnButton";
import Column from "../Column";
import PopUpAddColumn from "../PopUpAddColumn";
import {togglePopUpColumnOn, fetchColumnsByBoardtId} from "./redux/actions";
import PopUpAddTask from "../PopUpAddTask";



function AllColumnsComponent({projectId, boardId}) {
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
    dispatch(fetchColumnsByBoardtId(boardId));
  }, []);

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
      <ColumnsContainer>
        {columns.map((column) => (
          <Column
            key = {column._id}
            columnName = {column.name.length < 20 ? column.name : `${column.name.substring(0, 20)}...`}
            columnId = {column._id}
            tasksInColumn = {column.tasks}
          />
        ))}
        <AddColumnButton onAddColumnClick = {showPopUp}/>
      </ColumnsContainer>
      {isPopUpColumnOpen && <PopUpAddColumn boardId={boardId} />}
      {isPopUpTaskOpen && <PopUpAddTask boardId={boardId} />}
    </AllColumnsContainer>
    );
}

export default AllColumnsComponent;
