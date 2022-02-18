import PropTypes from "prop-types";
import {
    ColumnStyle, ColumnName, CloseButton, ColumnHeader, ColumnFooter, AddTaskButton,
} from "./ColumnStyles";
import { CloseIcon, PlusIcon } from "../../../shared/icons/icons";

function Column( {columnId, columnName}) {
  return (
    <ColumnStyle>
      <ColumnHeader>
        <ColumnName>
          {columnName}
          {columnId}
        </ColumnName>
        <CloseButton>
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