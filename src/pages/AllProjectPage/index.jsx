import React from 'react';
import AllProjectsContainer from "../../core/components/AllProjectsContainer";
import Topbar from "../../core/components/Topbar/Topbar";
import Sidebar from "../../core/components/Sidebar/Sidebar";
import {ProjectWrap} from "./styles";

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
