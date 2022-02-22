import { Route, Switch } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import AllBoardPage from '../pages/AllBoardPage';
import WelcomePage from "../pages/WelcomePage";
import MembersPage from "../pages/MembersPage/";

const Router = () => (
  <Switch>
    <Route exact path="/" component={WelcomePage} />
    <Route path="/auth" component={LoginPage} />
    <Route path="/reg" component={RegistrationPage} />
    <Route path="/boards" component={AllBoardPage} />
    <Route path="/members" component={MembersPage} />
  </Switch>
);

export default Router;
