import React from 'react';
import Topbar from "../../core/components/Topbar/Topbar";
import Sidebar from "../../core/components/Sidebar/Sidebar";
import {ProjectWrap} from "./styles";
import {Projects} from "../../core/components/Projects";

const AllProjectPage = () => (
    <div className="homeContainer">
        <Topbar/>
        <ProjectWrap>
            <Sidebar/>
            <Projects/>
        </ProjectWrap>
    </div>
);

export default AllProjectPage;
