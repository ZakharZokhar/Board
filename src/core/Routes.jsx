import { Route, Switch } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import AllProjectPage from '../pages/AllProjectPage';
import WelcomePage from "../pages/WelcomePage";

const Router = () => (
  <Switch>
    <Route exact path="/" component={WelcomePage} />
    <Route path="/auth" component={LoginPage} />
    <Route path="/reg" component={RegistrationPage} />
    <Route path="/projects" component={AllProjectPage} />
  </Switch>
);

export default Router;
