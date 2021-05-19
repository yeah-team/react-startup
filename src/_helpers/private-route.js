import { React } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, props, subdomain, ...rest }) => {
    const isLogin = false;
    return (
        <Route {...rest} render={props => (
            isLogin ?
                <Component {...props} />
                : <Redirect to={`/${subdomain.brand}/login`} />
        )
        } />
    );
};

export default PrivateRoute;