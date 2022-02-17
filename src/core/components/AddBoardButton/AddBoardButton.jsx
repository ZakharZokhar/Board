import AddProjectButton from "../AddProjectButton";
import { AddBoardContainer } from "./AddBoardButtonStyles";

function AddBoardButton() {
    return (
        <AddBoardContainer>
            <AddProjectButton buttonName={'Add new board'} />
        </AddBoardContainer>
    )
}

export default AddBoardButton;