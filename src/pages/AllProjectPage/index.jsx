import React from 'react';
import AllProjectsContainer from "../../core/components/AllProjectsContainer";
import Topbar from "../../core/components/Topbar/Topbar";
import Sidebar from "../../core/components/Sidebar/Sidebar";
import {ProjectWrap} from "./styles";
import FilterBar from "../../core/components/FilterBar/FilterBar";

const AllProjectPage = () => (
  <div className="homeContainer">
    <Topbar/>
    <ProjectWrap>
      <Sidebar/>
      <AllProjectsContainer/>
      <FilterBar/>
    </ProjectWrap>
  </div>
);

export default AllProjectPage;
