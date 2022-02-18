import {useDispatch, useSelector} from "react-redux";
import {
    BackToProjectsButton, BoardProjectName,
} from "../AllBoardsComponent/AllBoardsStyles";
import { ColumnsContainer, AllColumnsContainer } from "./AllColumnsComponentStyles";
import AddColumnButton from "../AddColumnButton";
import {closeColumns} from "../BigContainerForKanban/redux/actions";
import Column from "../Column";


function AllColumnsComponent() {
  const dispatch = useDispatch();
  const columns = useSelector((state) => state.columns)
  const onBackToBoards = () => {
    dispatch(closeColumns);
  }

  return (
    <AllColumnsContainer>
      <BoardProjectName>
      </BoardProjectName>
      <BackToProjectsButton onClick={onBackToBoards}>
        Back to boards
      </BackToProjectsButton>
      <ColumnsContainer>
        {columns.map((column) => (
          <Column
            key = {column._id}
            columnName = {column.name}
            columnId = {column._id}
          />
        ))}
        <AddColumnButton />
      </ColumnsContainer>
    </AllColumnsContainer>
    );
}

export default AllColumnsComponent;