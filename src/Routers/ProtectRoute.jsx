import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProviders';

function ProtectRoute({ children }) {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if (loading) {
        return <h1>Loadding...</h1>;
    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace />;
}

export default ProtectRoute;
