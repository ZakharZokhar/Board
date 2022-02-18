import {
    BackToProjectsButton, BoardProjectName,
} from "../AllBoardsComponent/AllBoardsStyles";
import { ColumnsContainer, AllColumnsContainer } from "./AllColumnsComponentStyles";
import Column from "../Column";
import AddColumnButton from "../AddColumnButton";

function AllColumnsComponent() {
  return (
    <AllColumnsContainer>
      <BoardProjectName>
      </BoardProjectName>
      <BackToProjectsButton>
        Back to boards
      </BackToProjectsButton>
      <ColumnsContainer>
        <Column />
        <Column />
        <Column />
        <AddColumnButton />
      </ColumnsContainer>
    </AllColumnsContainer>
    );
}

export default AllColumnsComponent;