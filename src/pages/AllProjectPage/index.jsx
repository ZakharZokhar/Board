import React from 'react';
import Topbar from "../../core/components/Topbar/Topbar";
import Sidebar from "../../core/components/Sidebar/Sidebar";
import {ProjectWrap} from "./styles";
import AllProjectsContainer from "../../core/components/AllProjectsContainer";

const AllProjectPage = () => (
    <div className="homeContainer">
        <Topbar/>
        <ProjectWrap>
            <Sidebar/>
            <AllProjectsContainer/>
        </ProjectWrap>
    </div>
);

export default AllProjectPage;
