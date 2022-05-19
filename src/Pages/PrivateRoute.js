import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';

const PrivateRoute = ({ children }) => {
    let [user, loading] = useAuthState(auth)
    const location = useLocation()
    if (loading) {
        return <Spinner animation="border" />
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} ></Navigate >
    }
    return children
};

export default PrivateRoute;