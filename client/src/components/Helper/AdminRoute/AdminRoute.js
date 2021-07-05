import React from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { Route, Navigate } from 'react-router-dom';

const AdminRoute = (props) => {
    const { isAuthenticated, isAdmin } = React.useContext(AuthContext);

    if (isAuthenticated === true && isAdmin === true)
        return <Route {...props} />;
    else if (isAdmin === false || isAdmin === null) return <Navigate to="/" />;
    else return null;
};

export default AdminRoute;
