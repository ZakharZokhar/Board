import { useDispatch, useSelector } from "react-redux";
import {
    AllBoardsHolder, BackToProjectsButton,
    BoardsContainer,
} from "./AllBoardsStyles";
import AddBoardButton from "../AddBoardButton";
import { closeBoards } from "../BigContainerForKanban/redux/actions";
import Board from "../Board";

function AllBoardsComponent() {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards);
  const onCloseBoards = () => {
    dispatch({...closeBoards});
  };

  return (
    <AllBoardsHolder>
      <BackToProjectsButton onClick={() => onCloseBoards()}>
        Back to projects
      </BackToProjectsButton>
      <BoardsContainer>
        <AddBoardButton
          buttonName={'Add new board'}
        />
        {boards.map((board) => (
          <Board
            key={board._id}
            boardId={board._id}
            boardName={board.name}
          />
        ))}
      </BoardsContainer>
    </AllBoardsHolder>
  );
}

export default AllBoardsComponent;