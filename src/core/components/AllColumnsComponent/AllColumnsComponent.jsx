import {useDispatch, useSelector} from "react-redux";
import {
    BackToProjectsButton, BoardProjectName,
} from "../AllBoardsComponent/AllBoardsStyles";
import { ColumnsContainer, AllColumnsContainer } from "./AllColumnsComponentStyles";
import AddColumnButton from "../AddColumnButton";
import {closeColumns} from "../BigContainerForKanban/redux/actions";
import Column from "../Column";
import PopUpAddColumn from "../PopUpAddColumn";
import {togglePopUpColumnOn} from "./redux/actions";


function AllColumnsComponent() {
  const dispatch = useDispatch();
  const columns = useSelector((state) => state.columns);
  const isPopUpOpen = useSelector((state) => state.popupColumn.isColumnPopUpOpen);
  const warnings = useSelector((state) => state.warningsColumnPopUp);
  const onBackToBoards = () => {
    dispatch(closeColumns);
  }
  const showPopUp = () => {
    dispatch(togglePopUpColumnOn);
  }

  return (
    <AllColumnsContainer>
      <BoardProjectName>
      </BoardProjectName>
      <BackToProjectsButton onClick={onBackToBoards}>
        Back to boards
      </BackToProjectsButton>
      {warnings.alreadyHere && 'Column with that name is already here!!'}
      <ColumnsContainer>
        {columns.map((column) => (
          <Column
            key = {column._id}
            columnName = {column.name}
            columnId = {column._id}
          />
        ))}
        <AddColumnButton onAddColumnClick = {showPopUp}/>
      </ColumnsContainer>
      {isPopUpOpen && <PopUpAddColumn />}
    </AllColumnsContainer>
    );
}

export default AllColumnsComponent;