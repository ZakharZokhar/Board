import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
    AllBoardsHolder, BackToProjectsButton,
    BoardsContainer,
} from "./AllBoardsStyles";
import Board from "../Board";
import PopUpAddBoard from "../PopUpAddBoard";
import {togglePopUpBoardOn, deleteBoardFromServer, fetchBoardsByProjectId} from "./redux/actions";
import { BoardProjectName } from "./AllBoardsStyles";
import AddElementButton from "../AddElementButton";


function AllBoardsComponent( {projectId} ) {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards);
  const isPopUpOpen = useSelector((state) => state.popupBoard.isBoardPopUpOpen)
  const projectName = useSelector((state) => state.projectName.name)
  useEffect(() => {
    dispatch(fetchBoardsByProjectId(projectId));
  }, []);
  const showPopUp = () => {
    dispatch(togglePopUpBoardOn);
  };
  const onDeleteBoard = (id) => {
    dispatch(deleteBoardFromServer(id))
  };

  return (
    <AllBoardsHolder>
      <BoardProjectName>
        {projectName}
      </BoardProjectName>
      <Link to={'/projects'}>
        <BackToProjectsButton>
          Back to projects
        </BackToProjectsButton>
      </Link>
      <BoardsContainer>
        <AddElementButton
          onAddClick = {showPopUp}
          buttonName={'Add new board'}
        />
        {boards.map((board) => (
          <Board
            key={board._id}
            boardId={board._id}
            boardName={board.name}
            numUsersInBoard={board.numUsers}
            onDeleteBoard={() => onDeleteBoard(board._id)}
          />
        ))}
        {isPopUpOpen && (<PopUpAddBoard projectId={projectId}/>)}
      </BoardsContainer>
    </AllBoardsHolder>
  );
}

export default AllBoardsComponent;
