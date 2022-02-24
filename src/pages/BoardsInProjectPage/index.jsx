import React from 'react';
import Topbar from "../../core/components/Topbar/Topbar";
import Sidebar from "./Sidebar";
import {BoardsWrap} from "./styles";
import AllBoardsComponent from "../../core/components/AllBoardsComponent";

const BoardsInProjectPage = ({ match }) => (
    <div className="homeContainer">
        <Topbar/>
        <BoardsWrap>
            <Sidebar/>
            <AllBoardsComponent projectId={match.params.projectId} />
        </BoardsWrap>
    </div>
);

export default BoardsInProjectPage;