import {Route, Switch} from 'react-router-dom';
import {PrivateRoute} from './PrivateRoute';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import WelcomePage from "../pages/WelcomePage";
import MembersPage from '../pages/MembersPage';
import AllProjectPage from '../pages/AllProjectPage';
import BoardsInProjectPage from '../pages/BoardsInProjectPage';
import ColumnsInBoardPage from '../pages/ColumnsInBoardPage';

const Router = () => (
        <Switch>
            <Route exact path="/" component={WelcomePage}/>
            <Route path="/auth" component={LoginPage}/>
            <Route path="/reg" component={RegistrationPage}/>
            <PrivateRoute path="/members" component={MembersPage}/>
            <PrivateRoute exact path="/projects" component={AllProjectPage}/>
            <PrivateRoute exact path='/projects/:projectId' component={BoardsInProjectPage}/>
            <PrivateRoute exact path='/projects/:projectId/:boardId' component={ColumnsInBoardPage}/>
        </Switch>
    )

export default Router;
