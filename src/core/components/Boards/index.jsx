import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
    AllBoardsHolder, BoardsContainer, BoardProjectName,
    BoardProjectDescription,
} from "./BoardsStyles";
import {Board} from "../Board";
import {PopUpAddBoard} from "../PopUpAddBoard";
import {togglePopUpBoardOn, deleteBoardFromServer, fetchBoardsByProjectId} from "./redux/actions";
import { AddElementButton } from "../AddElementButton";
import { removeNumBoardsInProject } from "../Projects/redux/actions";


export const Boards = ( {projectId} ) => {
    const dispatch = useDispatch();
    const boards = useSelector((state) => state.boards);
    const isPopUpOpen = useSelector((state) => state.popupBoard.isBoardPopUpOpen)
    const projectName = useSelector((state) => state.projectInfo.name)
    const projectDescription = useSelector((state) => state.projectInfo.description)
    useEffect(() => {
        dispatch(fetchBoardsByProjectId(projectId));
    }, []);
    const showPopUp = () => {
        dispatch(togglePopUpBoardOn);
    };
    const onDeleteBoard = (id) => {
        dispatch(deleteBoardFromServer(id))
        dispatch({...removeNumBoardsInProject, payload: projectId})
    };

    return (
        <AllBoardsHolder>
            <BoardProjectName>
                {projectName}
            </BoardProjectName>
            <BoardProjectDescription>
                {projectDescription}
            </BoardProjectDescription>
            <BoardsContainer>
                <AddElementButton
                    onAddClick = {showPopUp}
                    buttonName={'Add new board'}
                />
                {boards.map((board) => (
                    <Board
                        key={board._id}
                        boardId={board._id}
                        boardName={board.name.length < 52 ? board.name : `${board.name.substring(0, 52)}...`}
                        numUsersInBoard = {board.numUsers === 1 ? '1 user' : `${board.numUsers} users`}
                        onDeleteBoard={() => onDeleteBoard(board._id)}
                        projectId={projectId}
                    />
                ))}
                {isPopUpOpen && (<PopUpAddBoard projectId={projectId}/>)}
            </BoardsContainer>
        </AllBoardsHolder>
    );
}
