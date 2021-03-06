import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const GuestRoute = ({ component: Component, auth: { isAuthenticated, loading, access }, ...rest }) => (
    <Route
        {...rest}
        render={props => isAuthenticated && !loading ? (<Redirect to='/' />) : (<Component {...props} />)}
    />
);

GuestRoute.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(GuestRoute);
