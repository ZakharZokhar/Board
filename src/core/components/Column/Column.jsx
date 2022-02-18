import {
    ColumnStyle, ColumnName, CloseButton, ColumnHeader, ColumnFooter, AddTaskButton,
} from "./ColumnStyles";
import { CloseIcon, PlusIcon } from "../../../shared/icons/icons";

function Column() {
  return (
    <ColumnStyle>
      <ColumnHeader>
        <ColumnName>
          Name of column
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

export default Column;