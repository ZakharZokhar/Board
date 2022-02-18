import { useDispatch, useSelector } from "react-redux";
import {
    AllBoardsHolder, BackToProjectsButton,
    BoardsContainer,
} from "./AllBoardsStyles";
import AddBoardButton from "../AddBoardButton";
import { closeBoards } from "../BigContainerForKanban/redux/actions";
import Board from "../Board";
import PopUpAddBoard from "../PopUpAddBoard";
import { togglePopUpBoardOn } from "./redux/actions";

function AllBoardsComponent() {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards);
  const isPopUpOpen = useSelector((state) => state.popupBoard.isBoardPopUpOpen)
  const onCloseBoards = () => {
    dispatch({...closeBoards});
  };
  const showPopUp = () => {
    dispatch(togglePopUpBoardOn);
  };

  return (
    <AllBoardsHolder>
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
            boardName={board.name}
          />
        ))}
        {isPopUpOpen && (<PopUpAddBoard />)}
      </BoardsContainer>
    </AllBoardsHolder>
  );
}

export default AllBoardsComponent;