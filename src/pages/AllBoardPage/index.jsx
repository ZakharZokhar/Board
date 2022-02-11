import React from 'react';
import AllProjectsContainer from "../../core/components/AllProjectsContainer";
import Topbar from "../../core/components/Topbar/Topbar";
import Sidebar from "../../core/components/Sidebar/Sidebar";
import {BoardWrap} from "./styles";

const AllBoardPage = () => (
    <div className="homeContainer">
        <Topbar/>
        <BoardWrap>
            <Sidebar/>
            <AllProjectsContainer/>
        </BoardWrap>
    </div>
);

export default AllBoardPage;
