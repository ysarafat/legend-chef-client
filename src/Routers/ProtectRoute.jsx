import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProviders';
import Spinner from '../Pages/Shared/Spinner/Spinner';

function ProtectRoute({ children }) {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Spinner />;
    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace />;
}

export default ProtectRoute;
