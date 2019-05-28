import {Route, withRouter, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import React from "react";

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to="/" />
            )
    )} />
);


const Restrict = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Redirect to="/splash" />
        ) : (
                <Component {...props} />
            )
    )} />
);

const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const RestrictRoute = withRouter(connect(mapStateToProps, null)(Restrict));