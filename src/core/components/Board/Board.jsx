import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Project from "../Project";
import { BoardContainer } from "./BoardStyles";
import {openColumns} from "../BigContainerForKanban/redux/actions";
import {fetchColumnsByBoardtId} from "../AllColumnsComponent/redux/actions";

function Board({ boardName, boardId, onDeleteBoard, colUsersInBoard }) {
    const dispatch = useDispatch()
    const onOpenColumns = (boardName, boardId) => {
      dispatch(fetchColumnsByBoardtId(boardId));
      dispatch({...openColumns, payload: {boardName: boardName, boardId: boardId}});
    };
    return (
        <BoardContainer>
            <Project
            projectName={boardName}
            projectId={boardId}
            colUsersInProject={colUsersInBoard}
            onDeleteProject={onDeleteBoard}
            onOpenProject = {onOpenColumns}
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