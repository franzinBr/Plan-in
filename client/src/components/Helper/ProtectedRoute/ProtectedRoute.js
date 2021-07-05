import React from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
    const { isAuthenticated } = React.useContext(AuthContext);

    if (isAuthenticated === true) return <Route {...props} />;
    else if (isAuthenticated === false) return <Navigate to="/" />;
    else return null;
};

export default ProtectedRoute;
