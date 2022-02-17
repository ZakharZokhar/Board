import { useDispatch } from "react-redux";
import { AllBoardsHolder, BackToProjectsButton } from "./AllBoardsStyles";
import AddBoardButton from "../AddBoardButton";
import { closeBoards } from "../BigContainerForKanban/redux/actions";

function AllBoardsComponent() {
  const dispatch = useDispatch();
  const onCloseBoards = () => {
    dispatch({...closeBoards})  ;
  };

  return (
    <AllBoardsHolder>
      <BackToProjectsButton onClick={() => onCloseBoards()}>
        Back to projects
      </BackToProjectsButton>
      <AddBoardButton
        buttonName={'Add new board'}
      />
    </AllBoardsHolder>
  );
}

export default AllBoardsComponent;