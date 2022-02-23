import React from 'react';
import Topbar from "../../core/components/Topbar/Topbar";
import Sidebar from "../../core/components/Sidebar/Sidebar";
import {ColumnsWrap} from "./styles";
import {Columns} from "../../core/components/Columns";

const ColumnsInBoardPage = ({ match }) => (
    <div className="homeContainer">
        <Topbar/>
        <ColumnsWrap>
            <Sidebar/>
            <Columns
                projectId = {match.params.projectId}
                boardId = {match.params.boardId}
            />
        </ColumnsWrap>
    </div>
);

export default ColumnsInBoardPage;
