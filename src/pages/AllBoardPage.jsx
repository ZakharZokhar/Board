import React from 'react';
import AllProjectsContainer from "../core/components/AllProjectsContainer";
import Topbar from "../core/components/Topbar/Topbar";
import Sidebar from "../core/components/Sidebar/Sidebar";

const AllBoardPage = () => (
    <div>
        <Topbar/>
        <div className="homeContainer">
            <Sidebar/>
            <AllProjectsContainer />
        </div>
    </div>

);

export default AllBoardPage;
