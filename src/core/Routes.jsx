import { Route, Switch } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import AllProjectPage from '../pages/AllProjectPage';
import WelcomePage from "../pages/WelcomePage";
import BoardsInProjectPage from "../pages/BoardsInProjectPage";
import ColumnsInBoardPage from "../pages/ColumnsInBoardPage";
import SetTask from "./components/SetTask/SetTask";

const Router = () => (
  <Switch>
    <Route exact path="/" component={WelcomePage} />
    <Route path="/auth" component={LoginPage} />
    <Route path="/reg" component={RegistrationPage} />
    <Route exact path="/projects" component={AllProjectPage} />
    <Route exact path='/projects/:projectId' component={BoardsInProjectPage} />
    <Route exact path='/projects/:projectId/:boardId' component={ColumnsInBoardPage} />
    <Route exact path='/settask' component={SetTask} />
  </Switch>
);

export default Router;
