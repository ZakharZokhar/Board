import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home'
import Welcome from '../pages/Welcome/Welcome'

const Routes = () => (
  <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/welcome" component={Welcome} />
  </Switch>
);

export default Routes;
