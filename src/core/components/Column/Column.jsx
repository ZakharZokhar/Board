import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
    ColumnStyle, ColumnName, CloseButton, ColumnHeader, ColumnFooter, AddTaskButton,
} from "./ColumnStyles";
import { CloseIcon, PlusIcon } from "../../../shared/icons/icons";
import {deleteColumnFromServer} from "../AllColumnsComponent/redux/actions";

function Column( {columnId, columnName}) {
  const dispatch = useDispatch();
  const onClickDelete = (columnId) => {
    dispatch(deleteColumnFromServer(columnId));
  }

  return (
    <ColumnStyle>
      <ColumnHeader>
        <ColumnName>
          {columnName}
        </ColumnName>
        <CloseButton onClick={() => onClickDelete(columnId)}>
          <CloseIcon />
        </CloseButton>
      </ColumnHeader>
      <ColumnFooter>
        <AddTaskButton>
            <PlusIcon />
            Add a card
        </AddTaskButton>
      </ColumnFooter>
    </ColumnStyle>
  )
}

Column.propTypes = {
    ColumnName: PropTypes.string,
    ColumnId: PropTypes.string,
};

Column.defaultProps = {
    ColumnName: null,
    ColumnId: null,
};


export default Column;