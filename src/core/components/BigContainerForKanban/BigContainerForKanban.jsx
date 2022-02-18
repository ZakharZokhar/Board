import { useSelector } from 'react-redux';
import AllProjectsContainer from "../AllProjectsContainer";
import AllBoardsComponent from "../AllBoardsComponent";
import KanbanContainer from "./BigContainerForKanbanStyles";
import AllColumnsComponent from "../AllColumnsComponent";

function BigContainerForKanban() {
  const isBoardsOpen = useSelector((state) => state.openBoards.isBoardsOpen);

  return (
    <KanbanContainer>
      {isBoardsOpen ? <AllBoardsComponent />  : <AllProjectsContainer />}
      <AllColumnsComponent />
    </KanbanContainer>
  )
}

export default BigContainerForKanban;