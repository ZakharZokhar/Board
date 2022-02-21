import PropTypes from "prop-types";
import AddColumnButtonStyle from './AddColumnButtonStyles'
import {PlusIcon} from "../../../shared/icons/icons";

function AddColumnButton({ onAddColumnClick }) {

  return (
    <AddColumnButtonStyle onClick={onAddColumnClick}>
      <PlusIcon />
      Add new column
    </AddColumnButtonStyle>
  )
}

AddColumnButton.propTypes = {
    onAddColumnClick: PropTypes.func,
};

AddColumnButton.defaultProps = {
    onAddColumnClick: null,
};

export default AddColumnButton;
