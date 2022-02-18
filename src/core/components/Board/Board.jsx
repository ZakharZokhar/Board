import PropTypes from "prop-types";
import Project from "../Project";
import { BoardContainer } from "./BoardStyles";

function Board({ boardName, boardId, onDeleteBoard, colUsersInBoard }) {
    return (
        <BoardContainer>
            <Project
            projectName={boardName}
            projectId={boardId}
            colUsersInProject={colUsersInBoard}
            onDeleteProject={onDeleteBoard}
            />
        </BoardContainer>
    )
}

Board.propTypes = {
    boardName: PropTypes.string,
    boardId: PropTypes.string,
    onDeleteBoard: PropTypes.func,
    colUsersInBoard: PropTypes.number,
};

Board.defaultProps = {
    boardName: null,
    boardId: null,
    onDeleteBoard: null,
    colUsersInBoard: null,
};


export default Board;