import { Route, Switch } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import AllBoardPage from '../pages/AllBoardPage';
import WelcomePage from "../pages/WelcomePage";

const Router = () => (
  <Switch>
    <Route exact path="/" component={WelcomePage} />
    <Route path="/auth" component={LoginPage} />
    <Route path="/reg" component={RegistrationPage} />
    <Route path="/projects" component={AllBoardPage} />
  </Switch>
);

export default Router;
