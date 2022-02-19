import { useDispatch, useSelector } from "react-redux";
import {
    AllBoardsHolder, BackToProjectsButton,
    BoardsContainer, BoardProjectName
} from "./AllBoardsStyles";
import AddBoardButton from "../AddBoardButton";
import { closeBoards } from "../BigContainerForKanban/redux/actions";
import Board from "../Board";
import PopUpAddBoard from "../PopUpAddBoard";
import { togglePopUpBoardOn, deleteBoardFromServer } from "./redux/actions";

function AllBoardsComponent() {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards);
  const isPopUpOpen = useSelector((state) => state.popupBoard.isBoardPopUpOpen)
  const projectName = useSelector((state) => state.openBoards.boardProjectName)
  const onCloseBoards = () => {
    dispatch({...closeBoards});
  };
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
      <BackToProjectsButton onClick={() => onCloseBoards()}>
        Back to projects
      </BackToProjectsButton>
      <BoardsContainer>
        <AddBoardButton
          onAddBoardClick = {showPopUp}
          buttonName={'Add new board'}
        />
        {boards.map((board) => (
          <Board
            key={board._id}
            boardId={board._id}
            boardName={board.name.length < 52 ? board.name : `${board.name.substring(0, 52)}...`}
            colUsersInBoard={board.colUsers}
            onDeleteBoard={() => onDeleteBoard(board._id)}
          />
        ))}
        {isPopUpOpen && (<PopUpAddBoard />)}
      </BoardsContainer>
    </AllBoardsHolder>
  );
}

export default AllBoardsComponent;