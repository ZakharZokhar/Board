import { Route, Switch } from 'react-router-dom';
import MainPage from '../pages/MainPage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={MainPage} />
  </Switch>
);

export default Routes;
