import React from 'react';
import Topbar from "../../core/components/Topbar/Topbar";
import Sidebar from "../../core/components/Sidebar/Sidebar";
import {ProjectWrap} from "./styles";
import BigContainerForKanban from "../../core/components/BigContainerForKanban";

const AllProjectPage = () => (
    <div className="homeContainer">
        <Topbar/>
        <ProjectWrap>
            <Sidebar/>
            <BigContainerForKanban/>
        </ProjectWrap>
    </div>
);

export default AllProjectPage;
