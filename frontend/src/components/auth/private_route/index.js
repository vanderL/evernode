import React, { Component } from 'react'
import { Router, Redirect } from 'react-router-dom'

const privateRoute = ({ component: Component, ...rest}) => (
    <Router {...rest} render={props => (
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login'}} />
    )} />
)

export default privateRoute