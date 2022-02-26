import PropTypes from "prop-types";
import {Project} from "../Project";
import { BoardContainer } from "./BoardStyles";

export const Board = ({ boardName, boardId, onDeleteBoard, numUsersInBoard, projectId }) => (
    <BoardContainer>
        <Project
            projectName={boardName}
            projectId={boardId}
            additionalInfo={numUsersInBoard}
            onDeleteProject={onDeleteBoard}
            link={`/projects/${projectId}/${boardId}`}
        />
    </BoardContainer>
)

Board.propTypes = {
    boardName: PropTypes.string,
    boardId: PropTypes.string,
    onDeleteBoard: PropTypes.func,
    numUsersInBoard: PropTypes.string,
};

Board.defaultProps = {
    boardName: null,
    boardId: null,
    onDeleteBoard: null,
    numUsersInBoard: null,
};
