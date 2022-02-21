import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
    AllBoardsHolder, BackToProjectsButton,
    BoardsContainer, BoardProjectName,
    BoardProjectDescription,
} from "./AllBoardsStyles";
import Board from "../Board";
import PopUpAddBoard from "../PopUpAddBoard";
import {togglePopUpBoardOn, deleteBoardFromServer, fetchBoardsByProjectId} from "./redux/actions";
import AddElementButton from "../AddElementButton";


function AllBoardsComponent( {projectId} ) {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards);
  const isPopUpOpen = useSelector((state) => state.popupBoard.isBoardPopUpOpen)
  const projectName = useSelector((state) => state.projectInfo.name)
  const projectDescription = useSelector((state) => state.projectInfo.description)
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
      <BoardProjectDescription>
        {projectDescription}
      </BoardProjectDescription>
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
            boardName={board.name.length < 52 ? board.name : `${board.name.substring(0, 52)}...`}
            numUsersInBoard={board.numUsers}
            onDeleteBoard={() => onDeleteBoard(board._id)}
            projectId={projectId}
          />
        ))}
        {isPopUpOpen && (<PopUpAddBoard projectId={projectId}/>)}
      </BoardsContainer>
    </AllBoardsHolder>
  );
}

export default AllBoardsComponent;