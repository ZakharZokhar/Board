import { useSelector } from 'react-redux';
import AllProjectsContainer from "../AllProjectsContainer";
import AllBoardsComponent from "../AllBoardsComponent";
import KanbanContainer from "./BigContainerForKanbanStyles";
import AllColumnsComponent from "../AllColumnsComponent";

function BigContainerForKanban() {
  const isBoardsOpen = useSelector((state) => state.openBoards.isBoardsOpen);
  const isColumnsOpen = useSelector((state) => state.openColumns.isColumnsOpen);

  return (
    <KanbanContainer>
      {isColumnsOpen ?
          <AllColumnsComponent/>  :
          (isBoardsOpen ? <AllBoardsComponent /> : <AllProjectsContainer />)}
    </KanbanContainer>
  )
}

export default BigContainerForKanban;