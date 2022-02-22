import PropTypes from "prop-types";
import Project from "../Project";
import { BoardContainer } from "./BoardStyles";

function Board({ boardName, boardId, onDeleteBoard, numUsersInBoard, projectId }) {
    return (
        <BoardContainer>
            <Project
            projectName={boardName}
            projectId={boardId}
            numUsersInProject={numUsersInBoard}
            onDeleteProject={onDeleteBoard}
            link={`/projects/${projectId}/${boardId}`}
            />
        </BoardContainer>
    )
}

Board.propTypes = {
    boardName: PropTypes.string,
    boardId: PropTypes.string,
    onDeleteBoard: PropTypes.func,
    numUsersInBoard: PropTypes.number,
};

Board.defaultProps = {
    boardName: null,
    boardId: null,
    onDeleteBoard: null,
    numUsersInBoard: null,
};


export default Board;