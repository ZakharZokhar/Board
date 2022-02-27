import {Route, Switch, useHistory} from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import WelcomePage from "../pages/WelcomePage";

import ProhibitedRoutes from "./ProhibitedRoutes";
import {useEffect, useState} from "react";

const Router = () => {
    const history = useHistory();
    const [isToken, setIsToken] = useState(false)
    useEffect(() => {
        setIsToken(true)
    }, [localStorage.getItem('tokens')]);
    return (
        <Switch>
            <Route exact path="/" component={WelcomePage}/>
            <Route path="/auth" component={LoginPage}/>
            <Route path="/reg" component={RegistrationPage}/>
            {(isToken) ? <ProhibitedRoutes/> : history.push("/")}
        </Switch>
    )
};

export default Router;
