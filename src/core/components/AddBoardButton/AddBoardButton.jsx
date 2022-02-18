import PropTypes from "prop-types";
import AddProjectButton from "../AddProjectButton";
import { AddBoardContainer } from "./AddBoardButtonStyles";

function AddBoardButton({ onAddBoardClick }) {
    return (
        <AddBoardContainer>
            <AddProjectButton
              buttonName={'Add new board'}
              onAddClick={onAddBoardClick}
            />
        </AddBoardContainer>
    )
}

AddProjectButton.propTypes = {
    onAddBoardClick: PropTypes.func,
};

AddProjectButton.defaultProps = {
    onAddBoardClick: null,
};

export default AddBoardButton;