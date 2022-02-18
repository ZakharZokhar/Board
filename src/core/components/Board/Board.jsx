import PropTypes from "prop-types";
import Project from "../Project";
import { BoardContainer } from "./BoardStyles";

function Board({ boardName, boardId, onDeleteBoard }) {
    return (
        <BoardContainer>
            <Project
            projectName={boardName}
            projectId={boardId}
            onDeleteProject={onDeleteBoard}
            />
        </BoardContainer>
    )
}

Board.propTypes = {
    boardName: PropTypes.string,
    boardId: PropTypes.string,
    onDeleteBoard: PropTypes.func,
};

Board.defaultProps = {
    boardName: null,
    boardId: null,
    onDeleteBoard: null,
};


export default Board;