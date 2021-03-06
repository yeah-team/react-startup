import React, { Component } from 'react';
import { connect } from 'react-redux';

import { history } from './_helpers';

import { Router, Route, Switch } from 'react-router-dom';

import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import NotFound from './Components/NotFound';
import Home from './Components/Member/Home';
import Deposit from './Components/Member/Deposit';

import PrivateRoute from './_helpers/private-route';
import Brand from './Components/Brand';

import './App.css';

class App extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Router history={history}>
                <div>
                    <Switch>
                        <Route exact path="/" component={NotFound}></Route>
                        <Route
                            path="/:brand"
                            render={(data) => (
                                <Route>
                                    <Route path={``} subdomain={data.match.params} component={Brand} exact />
                                    <Route path={`/:brand/login`} component={Login} />
                                    <Route path={`/:brand/register`} component={Register} />
                                    <PrivateRoute path={`/:brand/member`} subdomain={data.match.params} component={Home} exact />
                                    <PrivateRoute path={`/:brand/member/deposit`} subdomain={data.match.params} component={Deposit} />
                                </Route>
                            )}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </div >
            </Router >
        );
    }
}

function mapStateToProps(state) {
    return {
        alert: state.alert
    };
}

export default connect(mapStateToProps)(App);
