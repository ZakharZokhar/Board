import {Route, Redirect} from 'react-router-dom';
export const PrivateRoute = ({component: Component, ...rest}) => {
    const tokens = localStorage.getItem('tokens') || null;
    return(
        <Route
            {...rest}
            render={props =>
                (tokens?.length > 0) ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/auth",
                        }}
                    />
                )
            }
        />
    )}
