import PropTypes from "prop-types";
import Project from "../Project";
import { BoardContainer } from "./BoardStyles";

function Board({ boardName, boardId }) {
    return (
        <BoardContainer>
            <Project
            projectName={boardName}
            projectId={boardId}
            />
        </BoardContainer>
    )
}

Board.propTypes = {
    boardName: PropTypes.string,
    boardId: PropTypes.string,
};

Board.defaultProps = {
    boardName: null,
    boardId: null,
};


export default Board;