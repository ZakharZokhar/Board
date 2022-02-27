import React from 'react';
import {Route} from "react-router-dom";
import MembersPage from "../pages/MembersPage";
import AllProjectPage from "../pages/AllProjectPage";
import BoardsInProjectPage from "../pages/BoardsInProjectPage";
import ColumnsInBoardPage from "../pages/ColumnsInBoardPage";

const ProhibitedRoutes = () => (
        <div>
            <Route path="/members" component={MembersPage} />
            <Route exact path="/projects" component={AllProjectPage} />
            <Route exact path='/projects/:projectId' component={BoardsInProjectPage} />
            <Route exact path='/projects/:projectId/:boardId' component={ColumnsInBoardPage} />
        </div>
    );


export default ProhibitedRoutes;
