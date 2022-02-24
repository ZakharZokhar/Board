import React from 'react';
import Topbar from "../../core/components/Topbar/Topbar";
import Sidebar from "../../core/components/Sidebar/Sidebar";
import {BoardWrap} from "./styles";
import MembersContainer from "./MembersContainer";

const MembersPage = () => (
    <div className="homeContainer">
        <Topbar/>
        <BoardWrap>
            <Sidebar/>
            <MembersContainer/>
        </BoardWrap>
    </div>
);

export default MembersPage;
